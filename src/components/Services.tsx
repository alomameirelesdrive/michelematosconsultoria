import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calculator, Database, Users, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Consultoria de Departamento Pessoal e RH",
    description: "Consultoria especializada para otimizar seus processos de DP e RH",
  },
  {
    icon: ClipboardCheck,
    title: "Gestão de Departamento Pessoal",
    description: "Gestão completa e eficiente do seu departamento pessoal",
  },
  {
    icon: Calculator,
    title: "Cálculos Trabalhistas",
    description: "Cálculos precisos de férias, rescisões e demais verbas trabalhistas",
  },
  {
    icon: Database,
    title: "Escrituração de Reclamatória Trabalhista no E-Social",
    description: "Processamento e escrituração de reclamatórias no sistema E-Social",
  },
  {
    icon: FileText,
    title: "Terceirização de Folha de Pagamento",
    description: "Gestão completa da folha de pagamento da sua empresa",
  },
];

const Services = () => {
  return (
    <section id="solucoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Nossas Soluções
        </h2>
        <div className="h-1 w-24 bg-gradient-hero mx-auto mb-12 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card"
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;