import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Jorge Pedroso",
    text: "Ótima profissional! Possui vasta experiência, conhecimento e atendimento de excelência, me ajudou muito. Recomendo!",
    rating: 5,
  },
  {
    name: "Paola Oliveira",
    text: "Michele super atenciosa, acolhedora, uma profissional ímpar. Resolveu tudo o que eu precisava! Indico muito!",
    rating: 5,
  },
  {
    name: "Luana Medeiros",
    text: "Profissional de excelência, demonstra grande atenção aos detalhes e oferece retorno de forma rápida e eficiente.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          O que dizem nossos clientes
        </h2>
        <div className="h-1 w-24 bg-gradient-hero mx-auto mb-12 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border shadow-soft">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://www.google.com/search?q=michele+matos+consultoria', '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver mais avaliações no Google
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;