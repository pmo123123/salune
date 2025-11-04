const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 md:px-12 bg-background/80 backdrop-blur-sm border-t border-border/20">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-bold text-foreground mb-2" style={{ fontSize: '10px' }}>Disclaimer</h3>
        <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '8pt' }}>
          This publication is intended for informational and cultural purposes only and does not constitute a legally binding agreement or investment solicitation. Salune is an experimental platform at the intersection of art, technology, and decentralized systems. Tokens or mints associated with Salune projects represent creative participation and process documentation, not ownership of financial assets or securities.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-2" style={{ fontSize: '8pt' }}>
          Participants should understand that blockchain-based projects involve inherent risks, including market volatility, smart contract vulnerabilities, and evolving regulatory conditions. Salune's purpose is cultural infrastructure: to explore how transparency, authorship, and collaboration can be expressed on-chain, not to guarantee profit or fixed outcomes.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-2" style={{ fontSize: '8pt' }}>
          Participation in Salune should be viewed as a contribution to a collective creative and technological experiment. Engage thoughtfully, and always conduct your own research before interacting with any on-chain component.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
