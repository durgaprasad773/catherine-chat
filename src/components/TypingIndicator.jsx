import React from 'react';

export function TypingIndicator() {
  return (
    <div className="msg-bot-wrapper">
      <div className="bot-label">
        <div className="bot-icon">
          <span>CM</span>
        </div>
        <span className="bot-name-tag">Ask Dr Catherine's Assistant</span>
      </div>
      <div className="typing-bubble">
        <span className="typing-dot" />
        <span className="typing-dot" />
        <span className="typing-dot" />
      </div>
    </div>
  );
}
