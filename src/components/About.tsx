import { Award, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Sobre Nós
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-none">
            <p className="text-lg text-card-foreground leading-relaxed mb-8">
              <span className="font-bold text-white">Michele Matos Consultoria de DP e RH</span> nasceu da experiência da sua fundadora, que atua há mais de 18 anos na área de Departamento Pessoal.
            </p>
            
            <p className="text-lg text-card-foreground leading-relaxed mb-8 font-medium">
              Mais do que executar serviços, acreditamos em construir parcerias duradouras, oferecendo soluções em DP e RH que realmente fazem a diferença para o seu negócio.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-xl">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Profissionalismo</h3>
                <p className="text-muted-foreground">Serviços executados com excelência e compromisso</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-xl">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Transparência</h3>
                <p className="text-muted-foreground">Clareza em cada etapa</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-xl">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Responsabilidade</h3>
                <p className="text-muted-foreground">Compromisso com segurança e qualidade</p>
              </div>
            </div>

            <p className="text-lg text-card-foreground mt-8 text-center">
              Contato: <a href="mailto:michelecontabilidade@hotmail.com" className="text-primary underline">michelecontabilidade@hotmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
