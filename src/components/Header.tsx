import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "5551993112279";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de consultoria.");

  const menuItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Michele Matos Consultoria DP & RH" 
              className="h-12 md:h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
                }}
              >
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;