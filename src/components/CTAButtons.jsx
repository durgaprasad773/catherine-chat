import React from 'react';

export function CTAButtons({
  bookNowShow, bookNowText, bookNowUrl,
  sendEmailShow, sendEmailText,
  ctaTwoShow, ctaTwoText, ctaTwoUrl,
  ctaThreeShow, ctaThreeText, ctaThreeUrl,
  onBookNow, onSendEmail, onCTATwo, onCTAThree,
  brandColour
}) {
  const actions = [
    { show: bookNowShow,   label: bookNowText,   onClick: onBookNow,   url: bookNowUrl },
    { show: ctaTwoShow,    label: ctaTwoText,    onClick: onCTATwo,    url: ctaTwoUrl },
    { show: sendEmailShow, label: sendEmailText, onClick: onSendEmail, url: null },
    { show: ctaThreeShow,  label: ctaThreeText,  onClick: onCTAThree,  url: ctaThreeUrl },
  ].filter(a => a.show && a.label);

  if (actions.length === 0) return null;

  const colour = brandColour || '#86356e';

  return (
    <div
      className="cta-buttons-row"
      style={{ display: 'flex', gap: '10px', overflowX: 'auto', padding: '10px 18px', borderTop: '1px solid var(--line)', scrollbarWidth: 'none' }}
    >
      {actions.map((action, idx) => (
        <a
          key={idx}
          style={{
            flexShrink: 0,
            minWidth: '120px',
            textAlign: 'center',
            border: `2px solid ${colour}`,
            color: colour,
            background: '#fff',
            borderRadius: '999px',
            padding: '6px 16px',
            fontSize: '12px',
            fontWeight: 800,
            cursor: 'pointer',
            textDecoration: 'none',
            fontFamily: 'inherit',
            boxShadow: 'var(--shadow-soft)',
            transition: 'background 0.15s',
          }}
          href={action.url || '#'}
          target={action.url && action.url.startsWith('http') ? '_blank' : undefined}
          rel={action.url && action.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          onClick={(e) => {
            if (action.onClick) {
              e.preventDefault();
              action.onClick();
            }
          }}
        >
          {action.label}
        </a>
      ))}
    </div>
  );
}
