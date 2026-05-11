import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';
import { CTAButtons } from './CTAButtons';
import { EmailFormModal } from './EmailFormModal';
import {
  WIDGET_ID,
  fetchImprovedChatResponse,
  saveReaction,
  getClinicSettings,
  getStarterQuestions,
  fetchUserIP,
  insertUserChatSession,
} from '../services/chatApi';

const API_BASE_URL = 'https://neurax-python-be-emhfejathhhpe6h3.uksouth-01.azurewebsites.net';

const DEFAULT_STARTER_QUESTIONS = [
  { q: 'What is REAPing Women and who is it for?', a: null },
  { q: 'I feel stuck and need a reset. Where should I start?', a: null },
  { q: 'How can I watch Dr Catherine\'s YouTube videos?', a: null },
  { q: 'Can Dr Catherine speak at our event?', a: null },
];

const DEFAULT_WELCOME =
  "Hi, I'm Dr Catherine's AI assistant. I can help you understand REAPing Women, the REAP & RISE roadmap, Dr Catherine's YouTube content, book, coaching, speaking topics, and the right next step.\n\nI can also signpost visitors who are looking for Adult ADHD, addictions, lifestyle psychiatry or mental health education routes. I can't provide diagnosis, treatment, therapy or crisis support, but I can help you find the most relevant pathway.";

export function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showStarters, setShowStarters] = useState(true);
  const [starterQuestions, setStarterQuestions] = useState(DEFAULT_STARTER_QUESTIONS);
  const [chatbotId] = useState(WIDGET_ID);
  const [userIP, setUserIP] = useState('127.0.0.1');
  const [sessionId, setSessionId] = useState(null);
  const [welcomeMessage, setWelcomeMessage] = useState(DEFAULT_WELCOME);
  const [headerName, setHeaderName] = useState("Ask Dr Catherine's Assistant");
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [brandColour, setBrandColour] = useState('#86356e');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [ctaConfig, setCtaConfig] = useState({
    bookNowShow: false, bookNowText: '', bookNowUrl: '',
    sendEmailShow: false, sendEmailText: '',
    ctaTwoShow: false, ctaTwoText: '', ctaTwoUrl: '',
    ctaThreeShow: false, ctaThreeText: '', ctaThreeUrl: ''
  });

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => { initialize(); }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, isLoading]);

  const initialize = async () => {
    try {
      const ip = await fetchUserIP();
      setUserIP(ip);

      const settings = await getClinicSettings(WIDGET_ID);
      if (settings?.IntroMessage) setWelcomeMessage(settings.IntroMessage);
      if (settings?.ClinicName)   setHeaderName(settings.ClinicName);
      if (settings?.LogoUrl)      setProfileImageUrl(settings.LogoUrl);
      if (settings?.BrandColour)  setBrandColour(settings.BrandColour);
      setCtaConfig({
        bookNowShow: settings?.BookNowShow === 'True' || settings?.BookNowShow === true,
        bookNowText: settings?.BookNowLabel || '',
        bookNowUrl:  settings?.BookNowUrl || '',
        sendEmailShow: settings?.SendAnEmailShow === 'True' || settings?.SendAnEmailShow === true,
        sendEmailText: settings?.SendAnEmailLabel || '',
        ctaTwoShow: settings?.CTATwoShow === 'True' || settings?.CTATwoShow === true,
        ctaTwoText: settings?.CTATwoLabel || '',
        ctaTwoUrl:  settings?.CTATwoUrl || '',
        ctaThreeShow: settings?.CTAThreeShow === 'True' || settings?.CTAThreeShow === true,
        ctaThreeText: settings?.CTAThreeLabel || '',
        ctaThreeUrl:  settings?.CTAThreeUrl || ''
      });

      const questions = await getStarterQuestions(WIDGET_ID);
      if (questions?.q1 || questions?.q2 || questions?.q3) {
        const qs = [
          questions.q1 && { q: questions.q1, a: questions.a1, url: questions.Url1, label: questions.ButtonLabel1 },
          questions.q2 && { q: questions.q2, a: questions.a2, url: questions.Url2, label: questions.ButtonLabel2 },
          questions.q3 && { q: questions.q3, a: questions.a3, url: questions.Url3, label: questions.ButtonLabel3 },
        ].filter(Boolean);
        if (qs.length) setStarterQuestions(qs);
      }
    } catch {
      // use defaults silently
    }
  };

  const ensureSession = async () => {
    if (sessionId) return sessionId;
    try {
      const sid = await insertUserChatSession(userIP, chatbotId);
      setSessionId(sid);
      return sid;
    } catch {
      const fallbackId = `session-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      setSessionId(fallbackId);
      return fallbackId;
    }
  };

  const handleSend = async (text) => {
    const msg = (text || inputValue).trim();
    if (!msg || isLoading) return;
    setInputValue('');
    setShowStarters(false);

    const sid = await ensureSession();
    setMessages(prev => [...prev, { id: Date.now(), text: msg, sender: 'user' }]);
    setIsLoading(true);

    try {
      const res = await fetchImprovedChatResponse(msg, sid, chatbotId, API_BASE_URL);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: res.response || res.message || 'Sorry, I could not process your request.',
          sender: 'bot',
          message_id: res.message_id,
          session_id: res.session_id || sid,
          userReaction: null,
          hasActionButton: res.has_action_button,
          actionButtons: res.action_buttons || [],
        },
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, text: 'Sorry, I encountered an error. Please try again.', sender: 'bot', isError: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStarterClick = async (item) => {
    if (isLoading) return;
    setShowStarters(false);

    const sid = await ensureSession();
    setMessages(prev => [...prev, { id: Date.now(), text: item.q, sender: 'user' }]);

    if (item.a) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: item.a,
          sender: 'bot',
          hasActionButton: !!(item.url && item.label),
          actionButtons: item.url && item.label ? [{ [item.label]: item.url }] : [],
          userReaction: null,
        },
      ]);
    } else {
      setIsLoading(true);
      try {
        const res = await fetchImprovedChatResponse(item.q, sid, chatbotId, API_BASE_URL);
        setMessages(prev => [
          ...prev,
          {
            id: Date.now() + 1,
            text: res.response || res.message || 'Sorry, I could not process your request.',
            sender: 'bot',
            message_id: res.message_id,
            session_id: res.session_id || sid,
            userReaction: null,
            hasActionButton: res.has_action_button,
            actionButtons: res.action_buttons || [],
          },
        ]);
      } catch {
        setMessages(prev => [
          ...prev,
          { id: Date.now() + 1, text: 'Sorry, I encountered an error. Please try again.', sender: 'bot', isError: true },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleReaction = async (messageId, msgSessionId, reaction) => {
    const current = messages.find(m => m.message_id === messageId);
    if (!current) return;
    const newReaction = current.userReaction === reaction ? null : reaction;
    setMessages(prev =>
      prev.map(m => m.message_id === messageId ? { ...m, userReaction: newReaction } : m)
    );
    try {
      await saveReaction(msgSessionId, messageId, newReaction, chatbotId, API_BASE_URL);
    } catch {
      setMessages(prev =>
        prev.map(m => m.message_id === messageId ? { ...m, userReaction: current.userReaction } : m)
      );
    }
  };

  const handleBookNow = () => {
    if (ctaConfig.bookNowUrl) window.open(ctaConfig.bookNowUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = () => {
    setShowEmailForm(true);
  };

  const handleCTATwo = () => {
    if (ctaConfig.ctaTwoUrl) window.open(ctaConfig.ctaTwoUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCTAThree = () => {
    if (ctaConfig.ctaThreeUrl) window.open(ctaConfig.ctaThreeUrl, '_blank', 'noopener,noreferrer');
  };

  const latestBotId = [...messages].reverse().find(m => m.sender === 'bot' && m.message_id)?.message_id;

  return (
    <div className="widget-card">
      {/* Header */}
      <div className="widget-head">
        <div className="assistant-id">
          {profileImageUrl ? (
            <img src={profileImageUrl} alt={headerName} className="assistant-avatar" style={{ padding: 0, objectFit: 'cover' }} />
          ) : (
            <div className="assistant-avatar">CM</div>
          )}
          <div>
            <div className="assistant-name">{headerName}</div>
            <div className="online">
              <span className="dot" />
              Online now
            </div>
          </div>
        </div>
        <div className="disclaimer-small">
          Educational only<br />Not crisis support
        </div>
      </div>

      {/* Body */}
      <div className="widget-body">
        <div className="message-label">{headerName}</div>

        <div className="messages-area">
          {/* Welcome bubble */}
          {messages.length === 0 && (
            <div className="welcome-bubble">{welcomeMessage}</div>
          )}

          {/* Chat messages */}
          {messages.map(msg => {
            const isLatestBot = msg.message_id && msg.message_id === latestBotId;
            return (
              <ChatMessage
                key={msg.id}
                message={msg}
                isLatestBot={isLatestBot}
                onReaction={handleReaction}
              />
            );
          })}

          {/* Typing indicator */}
          {isLoading && <TypingIndicator />}

          {/* Starter prompts */}
          {showStarters && messages.length === 0 && (
            <>
              <div className="prompt-title">Choose a topic to get started:</div>
              <div className="prompts">
                {starterQuestions.map((item, i) => (
                  <button
                    key={i}
                    className="prompt-btn"
                    onClick={() => handleStarterClick(item)}
                    disabled={isLoading}
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            </>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input row */}
        <CTAButtons
          bookNowShow={ctaConfig.bookNowShow}
          bookNowText={ctaConfig.bookNowText}
          bookNowUrl={ctaConfig.bookNowUrl}
          sendEmailShow={ctaConfig.sendEmailShow}
          sendEmailText={ctaConfig.sendEmailText}
          ctaTwoShow={ctaConfig.ctaTwoShow}
          ctaTwoText={ctaConfig.ctaTwoText}
          ctaTwoUrl={ctaConfig.ctaTwoUrl}
          ctaThreeShow={ctaConfig.ctaThreeShow}
          ctaThreeText={ctaConfig.ctaThreeText}
          ctaThreeUrl={ctaConfig.ctaThreeUrl}
          onBookNow={handleBookNow}
          onSendEmail={handleSendEmail}
          onCTATwo={handleCTATwo}
          onCTAThree={handleCTAThree}
          brandColour={brandColour}
        />

        {/* Input row */}
        <div className="widget-input-row">
          <input
            ref={inputRef}
            type="text"
            className="chat-input"
            placeholder="Type your question..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            disabled={isLoading}
          />
          <button
            className="send-btn"
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isLoading}
            aria-label="Send"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M14 8L2 2l2 6-2 6 12-6z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="widget-foot">
        Educational information only · Not a substitute for professional advice, diagnosis, therapy or crisis support · Powered by <strong>NeuraScaleX</strong>
      </div>

      <EmailFormModal
        isOpen={showEmailForm}
        onClose={() => setShowEmailForm(false)}
        chatbotId={chatbotId}
        brandColour={brandColour}
      />
    </div>
  );
}
