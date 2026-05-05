import { useState } from "react";

const GOLD = "hsl(42, 76%, 46%)";
const GOLD_DIM = "hsl(42, 76%, 46%, 0.12)";

const LoginGate = ({ onLogin }: { onLogin: (code: string) => boolean }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setTimeout(() => {
      const ok = onLogin(code);
      if (!ok) {
        setError(true);
        setCode("");
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 55%, ${GOLD_DIM} 0%, transparent 70%)`,
        }}
      />

      {/* Logo */}
      <div className="z-10 mb-10">
        <img
          src="/secondary-logo.png"
          alt="Sec(t) Infinity SolutionZ"
          className="h-14 w-auto opacity-80"
        />
      </div>

      {/* Lock SVG */}
      <div className="z-10 mb-10">
        <svg
          viewBox="0 0 120 120"
          width="80"
          height="80"
          fill="none"
          stroke={GOLD}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="24" y="54" width="72" height="52" rx="6" strokeWidth="1.6" strokeOpacity="0.7" />
          <path
            d="M40 54 V40 C40 24 80 24 80 40 V54"
            strokeWidth="1.6"
            strokeOpacity="0.7"
            fill="none"
          />
          <circle cx="60" cy="80" r="8" strokeWidth="1.4" strokeOpacity="0.85" />
          <line x1="60" y1="86" x2="60" y2="96" strokeWidth="1.4" strokeOpacity="0.5" />
        </svg>
      </div>

      {/* Heading + form */}
      <div className="z-10 text-center w-full max-w-sm">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/50 mb-4">
          Restricted Access
        </div>
        <h1 className="font-display text-3xl md:text-4xl text-foreground mb-3 leading-tight">
          Internal <span className="text-gold-gradient">Members</span>
        </h1>
        <p className="text-ash text-sm leading-relaxed mb-8">
          This platform is restricted to authorised members of the organisation.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={code}
            onChange={(e) => { setCode(e.target.value); setError(false); }}
            placeholder="Enter access code"
            autoComplete="off"
            className="w-full bg-hut border border-gold/20 rounded-sm px-4 py-3 text-foreground text-sm font-mono placeholder:text-ash/40 focus:outline-none focus:border-gold/50 transition-colors"
          />
          {error && (
            <p className="text-ember text-xs font-mono tracking-wide text-left">
              Access denied. Verify your code and try again.
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !code}
            className="btn-ember w-full text-xs disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Verifying…" : "Request Access"}
          </button>
        </form>

        <div className="flex items-center justify-center gap-2.5 mt-8">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginGate;
