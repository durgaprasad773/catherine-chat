import React from 'react';
import { parseMarkdown } from '../utils/helpers';

export function ChatMessage({ message, isLatestBot, onReaction }) {
  const isUser = message.sender === 'user';

  if (isUser) {
    return (
      <div className="msg-user-wrapper">
        <div
          className="msg-bubble-user"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(message.text) }}
        />
      </div>
    );
  }

  return (
    <div className="msg-bot-wrapper">
      <div className="bot-label">
        <div className="bot-icon">
          <span>CM</span>
        </div>
        <span className="bot-name-tag">Ask Dr Catherine's Assistant</span>
      </div>

      <div
        className={`msg-bubble-bot${message.isError ? ' msg-bubble-error' : ''}`}
        dangerouslySetInnerHTML={{ __html: parseMarkdown(message.text) }}
      />

      {/* Action buttons */}
      {message.hasActionButton && message.actionButtons?.length > 0 && (
        <div className="action-buttons">
          {message.actionButtons.map((btnObj, idx) => {
            const label = Object.keys(btnObj)[0];
            const url = btnObj[label];
            return (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn"
              >
                {label}
              </a>
            );
          })}
        </div>
      )}

      {/* Reaction buttons — only on the latest bot message */}
      {message.message_id && !message.isError && isLatestBot && (
        <div className="reaction-row">
          <button
            onClick={() => onReaction(message.message_id, message.session_id, true)}
            className={`reaction-btn${message.userReaction === true ? ' active-up' : ''}`}
            title="Helpful"
          >
            👍
          </button>
          <button
            onClick={() => onReaction(message.message_id, message.session_id, false)}
            className={`reaction-btn${message.userReaction === false ? ' active-down' : ''}`}
            title="Not helpful"
          >
            👎
          </button>
        </div>
      )}
    </div>
  );
}
