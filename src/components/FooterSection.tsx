import logoGold from "@/assets/logo-gold.png";

const FooterSection = () => {
  return (
    <footer id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* CTA */}
        <div className="text-center mb-24">
          <h2 className="text-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Join the<br />
            <span className="text-gold-gradient">Network</span>
          </h2>
          <p className="text-ash max-w-lg mx-auto mb-8 leading-relaxed">
            Are you a researcher, scientist, engineer, entrepreneur, or intellectual 
            ready to contribute to infinite solutions?
          </p>
          <a href="mailto:contact@sectinfinity.com" className="btn-ember">
            Let's Connect <span className="text-base leading-none">+</span>
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-16" />

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoGold} alt="" className="h-8 w-8 object-contain" />
              <span className="text-display text-sm text-gold-gradient">Sec(t) Infinity SolutionZ</span>
            </div>
            <p className="text-xs text-ash leading-relaxed">
              Engineering the future through disciplined thinking, 
              continuous improvement, and optimally challenging innovation.
            </p>
          </div>

          <div>
            <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-4">Navigate</div>
            <div className="space-y-2">
              {["About", "Fields", "Philosophy", "Academia"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-ash hover:text-gold transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-4">Connect</div>
            <div className="space-y-2 text-sm text-ash">
              <div>contact@sectinfinity.com</div>
              <div>Working Globally</div>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-ember animate-pulse-gold" />
                <span className="text-mono text-[10px] uppercase tracking-widest text-ember">
                  Accepting Projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Massive logo */}
        <div className="text-center opacity-[0.04]">
          <div className="text-display text-[8rem] md:text-[14rem] lg:text-[18rem] text-foreground leading-none select-none">
            SEC(T)&nbsp;∞
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <div className="text-mono text-[10px] text-ash/40 uppercase tracking-widest">
            © 2025 Sec(t) Infinity SolutionZ · United Minds. Infinite Solutions.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
