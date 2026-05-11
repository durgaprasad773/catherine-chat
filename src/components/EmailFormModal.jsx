import React, { useState } from 'react';
import { sendEmail } from '../services/chatApi';

export function EmailFormModal({ isOpen, onClose, chatbotId, brandColour }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setIsLoading(true);
    try {
      await sendEmail(formData.name, formData.email, formData.message, chatbotId);
      setShowSuccess(true);
      setTimeout(() => {
        onClose();
        setFormData({ name: '', email: '', message: '' });
        setShowSuccess(false);
      }, 2000);
    } catch (err) {
      setError(err.message || 'Failed to send email. Please try again.');
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  const accent = brandColour || '#86356e';

  return (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '16px' }}
      onClick={onClose}
    >
      <div
        style={{ background: '#fff', borderRadius: '20px', boxShadow: '0 20px 50px rgba(67,44,67,0.2)', maxWidth: '440px', width: '100%', maxHeight: '85vh', overflowY: 'auto' }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ padding: '24px' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 900, color: '#261d25' }}>Send us an Email</h3>
            <button
              onClick={onClose}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#9b8aa0', lineHeight: 1 }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: '#261d25', marginBottom: '6px' }}>
                Your Name*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px 14px', border: '1px solid #eadfea', borderRadius: '10px', fontSize: '14px', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = accent}
                onBlur={e => e.target.style.borderColor = '#eadfea'}
                required
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: '#261d25', marginBottom: '6px' }}>
                Your Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px 14px', border: '1px solid #eadfea', borderRadius: '10px', fontSize: '14px', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = accent}
                onBlur={e => e.target.style.borderColor = '#eadfea'}
                required
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: '#261d25', marginBottom: '6px' }}>
                Message*
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please tell us how we can help you..."
                rows={4}
                style={{ width: '100%', padding: '10px 14px', border: '1px solid #eadfea', borderRadius: '10px', fontSize: '14px', fontFamily: 'inherit', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = accent}
                onBlur={e => e.target.style.borderColor = '#eadfea'}
                required
              />
            </div>

            {/* States */}
            {isLoading && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6e6070', marginBottom: '12px' }}>
                <div style={{ width: '16px', height: '16px', border: '2px solid #eadfea', borderTopColor: accent, borderRadius: '50%', animation: 'rw-spin 0.7s linear infinite' }} />
                Sending email...
              </div>
            )}
            {showSuccess && (
              <div style={{ fontSize: '13px', color: '#3f6845', textAlign: 'center', marginBottom: '12px', fontWeight: 800 }}>
                ✅ Email sent successfully! We'll get back to you soon.
              </div>
            )}
            {error && (
              <div style={{ fontSize: '13px', color: '#991b1b', textAlign: 'center', marginBottom: '12px' }}>
                ❌ {error}
              </div>
            )}

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={onClose}
                style={{ flex: 1, padding: '10px', border: '1px solid #eadfea', background: '#fff', borderRadius: '10px', fontSize: '14px', fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit', color: '#261d25' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading || showSuccess}
                style={{ flex: 1, padding: '10px', border: 'none', background: accent, color: '#fff', borderRadius: '10px', fontSize: '14px', fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit', opacity: (isLoading || showSuccess) ? 0.5 : 1 }}
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
      <style>{`@keyframes rw-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
