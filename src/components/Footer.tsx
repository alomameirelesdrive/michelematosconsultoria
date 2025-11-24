const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Michele Matos</h3>
          <p className="text-primary-foreground/80 mb-4">Consultoria de DP e RH</p>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Michele Matos Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;