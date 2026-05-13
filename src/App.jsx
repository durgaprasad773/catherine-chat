import React from 'react';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  const scrollToAssistant = () => {
    const el = document.getElementById('ask-assistant');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* ── Top Banner ── */}
      <div className="top-art" aria-hidden="true" />

      <main className="page">
        <div className="shell">

          {/* ── Hero ── */}
          <header className="hero">
            <div className="logo-wrap" aria-label="REAPing Women logo">
              <div className="rw-logo">
                <span>R</span><span className="w">W</span>
              </div>
            </div>
            <h1>Ask Dr Cathy</h1>
            <div className="credentials">Dr Catherine Sampa Muyeba · MBChB · MSc · FRCPsych · DipIBLM</div>
            <p className="subtitle">
              A guided first conversation for high-achieving women who feel overwhelmed, stretched thin, or ready for a more purposeful next chapter.

            </p>
            <div className="mission">✨ Ask questions, explore REAPing Women, and find your next step — the Busy Woman’s Quiz, free workbook, Life Audit, community, videos, or speaking enquiry.</div>
            <div className="badges" aria-label="Trust badges">
              <span className="badge magenta">REAPing Women Community</span>
              <span className="badge">Lifestyle Medicine</span>
              <span className="badge green">ADHD &amp; Addictions</span>
              <span className="badge purple">Speaker &amp; Author</span>
            </div>
          </header>

          {/* ── Live Chat Widget ── */}
          <div id="ask-assistant">
            <ChatWidget />
          </div>

          {/* ── Primary CTAs ── */}
          <section className="feature-card">
            <a className="primary-cta" href="https://reaping-women.com/login" target="_blank" rel="noopener noreferrer">
              <div className="cta-icon">🌱</div>
              <div>
                <div className="cta-title">Join the REAPing Women Community</div>
                <div className="cta-sub">A structured, supportive coaching space for women ready to reflect, rise and live with purpose.</div>
              </div>
              <div className="arrow">→</div>
            </a>
            <a className="primary-cta green-border" href="https://calendly.com/catherinemuyeba/60" target="_blank" rel="noopener noreferrer">
              <div className="cta-icon">✨</div>
              <div>
                <div className="cta-title">Book the REAP &amp; RISE Life Audit</div>
                <div className="cta-sub">A focused reset to clarify where you are, what matters and your next aligned step.</div>
              </div>
              <div className="arrow">→</div>
            </a>
          </section>

          {/* ── Quick Links ── */}
          <div className="divider-title">Quick Links</div>

          <nav className="links" aria-label="Primary links">
          

            <a className="link-card purple" href="https://youtu.be/5yHN7V6qgCw?si=ZpIChGIzO35V05YP" target="_blank" rel="noopener noreferrer">
              <div className="link-icon">▶️</div>
              <div>
                <div className="link-title">Watch Dr Catherine on YouTube</div>
                <div className="link-sub">Mindset, wellbeing, personal growth and fruitful living</div>
              </div>
              <div className="arrow">→</div>
            </a>

            <a className="link-card gold" href="https://www.amazon.co.uk/dp/1068688076" target="_blank" rel="noopener noreferrer">
              <div className="link-icon">📘</div>
              <div>
                <div className="link-title">Get The REAPing Woman Book</div>
                <div className="link-sub">The book behind the REAP &amp; RISE roadmap</div>
              </div>
              <div className="arrow">→</div>
            </a>

            <a className="link-card" href="https://reapingwomen.com/contact" target="_blank" rel="noopener noreferrer">
              <div className="link-icon">🎤</div>
              <div>
                <div className="link-title">Invite Dr Catherine to Speak</div>
                <div className="link-sub">Mental health, ADHD, addictions, burnout and lifestyle medicine</div>
              </div>
              <div className="arrow">→</div>
            </a>

            <a className="link-card green" href="https://www.adhdcentre.co.uk/dr-catherine-muyeba-adhd-centre-specialist/" target="_blank" rel="noopener noreferrer">
              <div className="link-icon">🧠</div>
              <div>
                <div className="link-title">Adult ADHD Assessment Route</div>
                <div className="link-sub">Private ADHD clinic route through The ADHD Centre</div>
              </div>
              <div className="arrow">→</div>
            </a>

            <a className="link-card" href="https://reapingwomen.com/" target="_blank" rel="noopener noreferrer">
              <div className="link-icon">🌐</div>
              <div>
                <div className="link-title">Visit Reaping Women Website</div>
                <div className="link-sub">Services, media, framework, book and contact</div>
              </div>
              <div className="arrow">→</div>
            </a>

            <a className="link-card magenta" href="https://reapingwomenquiz.scoreapp.com/" target="_blank" rel="noopener noreferrer">
              <div className="link-icon">📝</div>
              <div>
                <div className="link-title">Take the Busy Woman's Quiz</div>
                <div className="link-sub">Discover burnout risk and receive personalised reflection feedback</div>
              </div>
              <div className="arrow">→</div>
            </a>

            <a className="link-card green" href="https://reapingwomen.com/reapingworkbook-772180-9673" target="_blank" rel="noopener noreferrer">
              <div className="link-icon">📄</div>
              <div>
                <div className="link-title">Download the Free REAPing Workbook</div>
                <div className="link-sub">Reflect, envision, analyse and plan your next step</div>
              </div>
              <div className="arrow">→</div>
            </a>
          </nav>

          {/* ── Community Box ── */}
          <section className="community-box">
            <h2>REAPing Women is the centre of this page.</h2>
            <p>
              This page gives Dr Catherine one link she can confidently share everywhere — LinkedIn, YouTube,
              podcast appearances, talks, email signature and WhatsApp — while the AI assistant guides visitors
              into the right next step.
            </p>
            <a href="https://reaping-women.com/login" target="_blank" rel="noopener noreferrer">
              Join the Community →
            </a>
          </section>

          {/* ── Choose Your Path ── */}
          <section className="card">
            <h2>Choose Your Path</h2>
            <div className="path-grid">
              <div className="path">
                <h3>I want to join a women's growth community</h3>
                <p>For professional women who want structure, accountability and guided personal growth through the REAP &amp; RISE roadmap.</p>
                <a href="https://reaping-women.com/login" target="_blank" rel="noopener noreferrer">Join REAPing Women →</a>
              </div>
              <div className="path">
                <h3>I need a personal reset</h3>
                <p>For women who want a focused life audit to reflect, clarify priorities and choose the next step with confidence.</p>
                <a href="https://calendly.com/catherinemuyeba/60" target="_blank" rel="noopener noreferrer">Book REAP &amp; RISE Life Audit →</a>
              </div>
              <div className="path">
                <h3>I want mental health, ADHD or addictions signposting</h3>
                <p>For visitors looking for Dr Catherine's psychiatry, Adult ADHD, addictions or lifestyle medicine expertise through the appropriate route.</p>
                <a href="https://www.adhdcentre.co.uk/dr-catherine-muyeba-adhd-centre-specialist/" target="_blank" rel="noopener noreferrer">View ADHD Route →</a>
              </div>
              <div className="path">
                <h3>I want Dr Catherine to speak or collaborate</h3>
                <p>For events, podcasts, workplaces and organisations focused on mental health, ADHD, addictions, stress, burnout and lifestyle medicine.</p>
                <a href="https://reapingwomen.com/contact" target="_blank" rel="noopener noreferrer">Invite Dr Catherine →</a>
              </div>
            </div>
          </section>

          {/* ── REAP & RISE Roadmap ── */}
          <section className="card">
            <h2>The REAP &amp; RISE Roadmap</h2>
            <p style={{ marginBottom: '14px' }}>
              A practical framework to help high-achieving women transform emotionally, professionally and
              personally — moving from reflection to action with clarity and purpose.
            </p>
            <div className="reap-grid">
              <div className="reap-item">
                <h3>Reflect</h3>
                <p>Pause honestly. Notice what is working, what is draining you and what needs attention.</p>
              </div>
              <div className="reap-item">
                <h3>Empower</h3>
                <p>Rebuild confidence, self-leadership and the belief that change is possible.</p>
              </div>
              <div className="reap-item">
                <h3>Align</h3>
                <p>Reconnect decisions, habits and goals with the life and impact you truly want.</p>
              </div>
              <div className="reap-item">
                <h3>Produce</h3>
                <p>Take grounded action so your personal, professional and leadership life becomes fruitful.</p>
              </div>
            </div>
          </section>

          {/* ── Meet Dr Catherine ── */}
          <section className="card">
            <h2>Meet Dr Catherine</h2>
            <p>
              Dr Catherine Muyeba is a Regional Lead Consultant Psychiatrist with extensive experience across
              hospitals, community and prisons. She is also a Lifestyle Psychiatrist, Adult ADHD and addictions
              expert, coach, speaker, author and founder of REAPing Women.
            </p>
          </section>

          {/* ── What Dr Catherine Helps With ── */}
          <section className="card">
            <h2>What Dr Catherine Helps With</h2>
            <div className="proof-grid">
              <div className="proof">
                <h3>REAPing Women Community</h3>
                <p>Helping professional women recover, refocus and thrive through the REAP &amp; RISE roadmap.</p>
                <a href="https://reaping-women.com/login" target="_blank" rel="noopener noreferrer">Community Route →</a>
              </div>
              <div className="proof">
                <h3>YouTube &amp; Thought Leadership</h3>
                <p>Practical videos on mindset, wellbeing, growth, personal leadership and fruitful living.</p>
                <a href="https://youtu.be/5yHN7V6qgCw?si=ZpIChGIzO35V05YP" target="_blank" rel="noopener noreferrer">Watch Content →</a>
              </div>
              <div className="proof">
                <h3>Mental Health, ADHD &amp; Addictions</h3>
                <p>Specialist psychiatry expertise, including Adult ADHD and addictions, with a holistic lifestyle-informed lens.</p>
                <a href="https://www.adhdcentre.co.uk/dr-catherine-muyeba-adhd-centre-specialist/" target="_blank" rel="noopener noreferrer">Clinical Route →</a>
              </div>
              <div className="proof">
                <h3>Speaking &amp; Education</h3>
                <p>International speaking on mental health education, ADHD, addictions, stress, burnout, wellbeing and personal development.</p>
                <a href="https://reapingwomen.com/contact" target="_blank" rel="noopener noreferrer">Speaking Route →</a>
              </div>
            </div>
          </section>

          {/* ── Why Women Come Here ── */}
          <section className="card">
            <h2>Why Women Come Here</h2>
            <blockquote className="quote">
              "If you've ever felt stuck, unsure of your next step, weighed down by self doubt, or frustrated
              by goals that never quite stick — you're not alone, and you don't have to stay there."
            </blockquote>
          </section>

          {/* ── Featured Links ── */}
          <section className="card">
            <h2>Featured Links</h2>
            <div className="links" style={{ marginBottom: 0 }}>
              <a className="link-card magenta" href="https://reapingwomen.com/" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">🌱</div><div><div className="link-title">REAPing Women Website</div><div className="link-sub">Community, method, blog, services and wellbeing resources</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card" href="https://reapingwomen.com/about-248169" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">👩🏾‍⚕️</div><div><div className="link-title">About REAPing Women</div><div className="link-sub">Learn the mission behind the REAP &amp; Rise framework</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card" href="https://reapingwomen.com/blog-251386" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">✍️</div><div><div className="link-title">REAPing Women Blog</div><div className="link-sub">Articles and reflections for burnout, growth and wellbeing</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card" href="https://reapingwomen.com/services" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">🧩</div><div><div className="link-title">REAPing Women Services</div><div className="link-sub">Community, coaching, speaking, courses and resources</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card" href="https://reapingwomen.com/contact" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">📩</div><div><div className="link-title">Contact REAPing Women</div><div className="link-sub">For speaking, collaboration, workplace or community enquiries</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card gold" href="https://www.amazon.co.uk/dp/1068688076" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">📘</div><div><div className="link-title">The REAPing Woman Book</div><div className="link-sub">A roadmap to purpose and passion</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card magenta" href="https://reapingwomenquiz.scoreapp.com/" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">📝</div><div><div className="link-title">Busy Woman's Quiz</div><div className="link-sub">Burnout risk reflection and personalised report</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card green" href="https://reapingwomen.com/reapingworkbook-772180-9673" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">📄</div><div><div className="link-title">Free REAPing Workbook</div><div className="link-sub">Guided 4-module reflection and planning system</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card purple" href="https://open.spotify.com/episode/0mIunmQKMKMyoFKUiwc20s?si=84C3l-8ESECuuRVxdeRAOw" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">🎧</div><div><div className="link-title">Reflect Reset Rise Guest Appearance</div><div className="link-sub">Rivers to Resilience podcast episode</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card purple" href="https://open.spotify.com/episode/45xCiFsRwuJqnMkETzIKXY?si=yNtR99Z4RHmYypk5eXDirA" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">🎙️</div><div><div className="link-title">You Are Salt Podcast Guest Appearance</div><div className="link-sub">Dr Cathy's purpose-led story and conversation</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card" href="https://linktr.ee/Drcathymuyeba" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">🔗</div><div><div className="link-title">Original Linktree</div><div className="link-sub">Fallback source for any future media or social updates</div></div><div className="arrow">→</div>
              </a>
            </div>
          </section>

          {/* ── Trusted Signposts ── */}
          <section className="card">
            <h2>Trusted Signposts</h2>
            <div className="links" style={{ marginBottom: 0 }}>
              <a className="link-card green" href="https://www.adhdcentre.co.uk/dr-catherine-muyeba-adhd-centre-specialist/" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">🧠</div><div><div className="link-title">Adult ADHD Assessment</div><div className="link-sub">Dr Catherine's ADHD Centre specialist profile and booking route</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card" href="https://www.changegrowlive.org/" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">🤝</div><div><div className="link-title">Help for Drugs &amp; Alcohol Problems</div><div className="link-sub">Change Grow Live support and information</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card" href="https://www.youngminds.org.uk/" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">💛</div><div><div className="link-title">YoungMinds</div><div className="link-sub">Mental health support for children, young people and parents</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card" href="https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/stress" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">🌡️</div><div><div className="link-title">Stress Guide</div><div className="link-sub">Mental Health Foundation stress information</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card" href="https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">🧭</div><div><div className="link-title">Mental Health Information</div><div className="link-sub">Royal College of Psychiatrists patient and carer information</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card" href="https://bslm.org.uk/" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">🌿</div><div><div className="link-title">Lifestyle Medicine</div><div className="link-sub">British Society of Lifestyle Medicine</div></div><div className="arrow">→</div>
              </a>
              <a className="link-card" href="https://www.who.int/news-room/fact-sheets/detail/mental-disorders" target="_blank" rel="noopener noreferrer">
                <div className="link-icon">🌍</div><div><div className="link-title">WHO Mental Disorders Fact Sheet</div><div className="link-sub">World Health Organization public information</div></div><div className="arrow">→</div>
              </a>
            </div>
          </section>

          {/* ── Social Links ── */}
          <nav className="socials" aria-label="Social links">
            <a href="https://www.linkedin.com/in/dr-catherine-sampa-muyeba-bschb-mbchb-msc-mrcpsych-cblc-iblmdip-954a1b50" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://youtu.be/5yHN7V6qgCw?si=ZpIChGIzO35V05YP" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://www.instagram.com/drcathymuyeba?igsh=MWJiYTdwZGcwempwaA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@drcathymuyeba" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://reapingwomen.com/" target="_blank" rel="noopener noreferrer">Website</a>
            <a href="https://reapingwomen.com/contact" target="_blank" rel="noopener noreferrer">Contact</a>
          </nav>

          {/* ── Footer ── */}
          <footer>
            © Dr Catherine Muyeba · REAPing Women · Powered by<a href="https://neurascalex.com/" target="_blank" rel="noopener noreferrer"> <strong>NeuraScaleX</strong></a>
            <br />
            Educational information only. Not a substitute for professional advice, diagnosis, therapy or crisis support.
            Clinical services should always be accessed through the appropriate clinical provider or booking pathway.
            <br />
            askcatherine.neurascalex.com
          </footer>

        </div>
      </main>

      {/* Floating Chat Button */}
      <button
        type="button"
        onClick={scrollToAssistant}
        aria-label="Chat with Dr Catherine's assistant"
        style={{
          position: 'fixed',
          right: 18,
          bottom: 18,
          zIndex: 50,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: 'linear-gradient(135deg, #3f6845, #86356e)',
          color: '#fff',
          border: '2px solid rgba(255,255,255,0.9)',
          borderRadius: 999,
          padding: '13px 17px',
          boxShadow: '0 18px 36px rgba(63,53,110,0.24)',
          fontSize: 14,
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'transform 0.18s ease, box-shadow 0.18s ease',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 22px 44px rgba(63,53,110,0.28)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 18px 36px rgba(63,53,110,0.24)';
        }}
      >
        <span
          style={{
            width: 30, height: 30, borderRadius: 999,
            display: 'grid', placeItems: 'center',
            background: '#b14d8d',
            color: '#fff', fontSize: 15, flexShrink: 0,
          }}
        >
          💬
        </span>
        <span style={{ whiteSpace: 'nowrap' }}>Ask Cathy</span>
      </button>
    </>
  );
}
