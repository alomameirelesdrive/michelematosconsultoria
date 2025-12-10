import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Michele Matos</h3>
          <p className="text-primary-foreground/80 mb-4">Consultoria de DP e RH</p>
          
          <a
            href="https://www.instagram.com/michelematos_consultoria/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4"
          >
            <Instagram className="h-5 w-5" />
            @michelematos_consultoria
          </a>
          
          <p className="text-sm text-primary-foreground/60 mt-4">
            © {new Date().getFullYear()} Michele Matos Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;