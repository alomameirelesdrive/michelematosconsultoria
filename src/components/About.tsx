import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Sobre Nós
          </h2>
          <div className="h-1 w-24 bg-gradient-hero mx-auto mb-12 rounded-full" />
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
            <p className="text-lg text-card-foreground leading-relaxed mb-8">
              <span className="font-bold text-primary">Michele Matos Consultoria de DP e RH</span> nasceu da experiência da sua fundadora, que atua há mais de 18 anos na área de Departamento Pessoal.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-lg text-card-foreground">
                  Oferecemos soluções completas em Folha de Pagamento e Gestão de Pessoas
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-lg text-card-foreground">
                  Ajudamos empresas a ganharem tempo, segurança e eficiência
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-lg text-card-foreground">
                  Experiência comprovada com mais de 18 anos no mercado
                </p>
              </div>
            </div>
            
            <p className="text-lg text-card-foreground leading-relaxed mt-8 font-medium">
              Fale conosco hoje e descubra como simplificar sua gestão de DP/RH!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;