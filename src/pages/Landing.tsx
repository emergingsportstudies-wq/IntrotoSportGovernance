import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CheckCircle } from 'lucide-react';

export function Landing() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="paper-bg min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300"
        style={{
          height: '56px',
          padding: '0 32px',
          background: scrolled ? 'var(--bg-primary)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border-light)' : '1px solid transparent',
        }}
      >
        <span
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: '20px',
            color: 'var(--text-primary)',
          }}
        >
          Intro to Sport Governance: Field Notes
        </span>
        <button
          onClick={() => navigate('/app')}
          className="rounded-md transition-all duration-200"
          style={{
            background: '#C8553D',
            color: '#FFFFFF',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '14px',
            fontWeight: 500,
            padding: '8px 16px',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#B34A34';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#C8553D';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Open Notebook
        </button>
      </nav>

      {/* Hero Section */}
      <section
        className="flex items-center justify-center relative overflow-hidden"
        style={{ minHeight: '100vh', padding: '0 24px' }}
      >
        {/* Soccer Ball Watermark */}
        <img
          src="/soccer-ball.png"
          alt=""
          className="absolute pointer-events-none select-none"
          style={{
            width: '500px',
            height: '500px',
            opacity: 0.06,
            right: '-60px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 0,
          }}
        />

        {/* Hero Content */}
        <div
          className="relative z-10 text-center flex flex-col items-center"
          style={{ maxWidth: '720px' }}
        >
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '20px',
            }}
          >
            Prepared for the Zimbabwe Olympic Committee
          </p>

          <h1
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(42px, 6vw, 72px)',
              color: 'var(--text-primary)',
              lineHeight: 1.05,
              fontWeight: 400,
            }}
          >
            Introduction to
            <br />
            <span style={{ color: 'var(--accent)' }}>Sport Governance</span>
          </h1>

          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              marginTop: '20px',
              lineHeight: 1.6,
            }}
          >
            Your course notes for the ZOC Board Members module. Write notes for each week
            and export to PDF when you're ready to review.
          </p>

          <button
            onClick={() => navigate('/app')}
            className="rounded-md transition-all duration-200"
            style={{
              background: '#C8553D',
              color: '#FFFFFF',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '16px',
              fontWeight: 500,
              padding: '12px 28px',
              marginTop: '36px',
              boxShadow: '0 2px 8px rgba(200, 85, 61, 0.3)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#B34A34';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(200, 85, 61, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C8553D';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(200, 85, 61, 0.3)';
            }}
          >
            Start Writing
          </button>


        </div>
      </section>

      {/* Course Info + Feature Preview Section */}
      <section
        style={{
          background: 'var(--editor-bg)',
          borderTop: '1px solid var(--border-light)',
          padding: '80px 32px',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: '960px' }}>
          {/* Course Description */}
          <div className="mb-16">
            <h2
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: '36px',
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                marginBottom: '20px',
              }}
            >
              About this course
            </h2>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '16px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '720px',
              }}
            >
              This course introduces members to governance structures and processes related to
              policy, legislative, and legal compliance within sport organizations in the public,
              private, and non-profit sport sectors. Members will discuss issues related to
              governance principles, morals, and standards in the sport industry, and will
              critically review what constitutes good governance in relation to various internal
              and external stakeholders.
            </p>
          </div>

          {/* Two-column layout: Features + Mockup */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left Column - Features */}
            <div className="flex-1">
              <h2
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: '36px',
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                  marginBottom: '32px',
                }}
              >
                8 weeks,
                <br />
                one notebook
              </h2>

              <div className="flex flex-col gap-4">
                {[
                  'Take notes for each of the 8 weekly modules',
                  'Auto-saves to your browser — no account needed',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle
                      size={16}
                      style={{ color: 'var(--success)', flexShrink: 0 }}
                    />
                    <span
                      style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontSize: '15px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learning Objectives */}
              <div className="mt-10">
                <h3
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '16px',
                  }}
                >
                  Module Learning Objectives
                </h3>
                <ol className="flex flex-col gap-3">
                  {[
                    'Identify what is sport governance and what are characteristics of good governance',
                    'Critically assess different forms of governance that are used in sport organizations',
                    'Describe practices for regulatory compliance in sport governance',
                    'Analyze significant issues in the governance of sport',
                  ].map((obj, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        style={{
                          fontFamily: "'Inter', system-ui, sans-serif",
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--accent)',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        {i + 1}.
                      </span>
                      <span
                        style={{
                          fontFamily: "'Inter', system-ui, sans-serif",
                          fontSize: '14px',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5,
                        }}
                      >
                        {obj}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right Column - Mockup */}
            <div className="flex-1 flex justify-center">
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  transform: 'scale(0.85)',
                  transformOrigin: 'center center',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-light)',
                  width: '500px',
                }}
              >
                {/* Mini Sidebar */}
                <div className="flex" style={{ height: '340px' }}>
                  <div
                    className="w-[140px] p-3 flex flex-col gap-1 shrink-0"
                    style={{ background: 'var(--bg-sidebar)' }}
                  >
                    <span
                      className="mb-2"
                      style={{
                        fontFamily: "'DM Serif Display', Georgia, serif",
                        fontSize: '12px',
                        color: 'var(--text-light)',
                      }}
                    >
                      Intro to Sport Governance: Field Notes
                    </span>
                    {[
                      { n: 'W1', t: 'Intro to Sport Governance', a: true },
                      { n: 'W2', t: 'Governance Processes', a: false },
                      { n: 'W3', t: 'Strategy and Policy', a: false },
                    ].map((m, i) => (
                      <div
                        key={i}
                        className="rounded px-2 py-[6px]"
                        style={{
                          background: m.a ? 'rgba(255,255,255,0.1)' : 'transparent',
                          borderLeft: m.a ? '2px solid var(--accent)' : '2px solid transparent',
                        }}
                      >
                        <span
                          className="inline-block rounded text-center mb-1"
                          style={{
                            width: '16px',
                            height: '16px',
                            fontSize: '9px',
                            fontWeight: 600,
                            background: 'rgba(255,255,255,0.1)',
                            color: 'rgba(255,255,255,0.7)',
                            lineHeight: '16px',
                          }}
                        >
                          {m.n}
                        </span>
                        <p
                          className="truncate"
                          style={{
                            fontSize: '10px',
                            color: 'rgba(255,255,255,0.8)',
                          }}
                        >
                          {m.t}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Mini Editor */}
                  <div className="flex-1 flex flex-col" style={{ background: 'var(--editor-bg)' }}>
                    {/* Mini Toolbar */}
                    <div
                      className="flex items-center gap-1 px-3"
                      style={{
                        height: '32px',
                        borderBottom: '1px solid var(--border-light)',
                        background: 'var(--bg-primary)',
                      }}
                    >
                      {['B', 'I', 'U'].map((c) => (
                        <span
                          key={c}
                          className="inline-flex items-center justify-center rounded"
                          style={{
                            width: '20px',
                            height: '20px',
                            fontSize: '10px',
                            fontWeight: 600,
                            color: 'var(--text-secondary)',
                            background: 'var(--bg-secondary)',
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    {/* Mini Content */}
                    <div className="p-4 flex-1 overflow-hidden">
                      <p
                        style={{
                          fontFamily: "'DM Serif Display', Georgia, serif",
                          fontSize: '14px',
                          color: 'var(--text-primary)',
                          marginBottom: '8px',
                        }}
                      >
                        Week 1: Introduction to Sport Governance
                      </p>
                      <p
                        style={{
                          fontSize: '10px',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                          marginBottom: '6px',
                        }}
                      >
                        Sport governance refers to the system by which sports organisations are
                        directed and controlled. It encompasses structures, processes, and
                        practices ensuring accountability and transparency.
                      </p>
                      <p
                        style={{
                          fontSize: '10px',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                          marginBottom: '6px',
                        }}
                      >
                        Good governance requires strong leadership that balances competing
                        interests while maintaining stakeholder confidence.
                      </p>
                      <div
                        className="rounded my-2"
                        style={{
                          borderLeft: '2px solid var(--accent)',
                          padding: '6px 10px',
                          background: 'rgba(200,85,61,0.04)',
                        }}
                      >
                        <p
                          style={{
                            fontSize: '9px',
                            color: 'var(--text-secondary)',
                            fontStyle: 'italic',
                          }}
                        >
                          "Good governance is about creating the environment where the right
                          decisions are made." — IOC
                        </p>
                      </div>
                      <ul className="pl-4" style={{ listStyleType: 'disc' }}>
                        {['Transparency', 'Accountability', 'Integrity'].map((item) => (
                          <li
                            key={item}
                            style={{
                              fontSize: '10px',
                              color: 'var(--text-secondary)',
                              margin: '3px 0',
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="flex items-center justify-center"
        style={{
          height: '60px',
          background: 'var(--bg-primary)',
          borderTop: '1px solid var(--border-light)',
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '13px',
            color: 'var(--text-muted)',
          }}
        >
          Module: Sport Governance — Prepared for the Zimbabwe Olympic Committee
        </span>
      </footer>
    </div>  );
}
