import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Users, ArrowRight, Cog, Target, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Complete Automatic Solutions",
      description: "Fully autonomous multi-agent workflows that handle complex tasks from start to finish without human intervention.",
      features: ["End-to-end automation", "Self-learning systems", "24/7 operation", "Scalable architecture"]
    },
    {
      icon: Users,
      title: "Hybrid Human-in-Loop",
      description: "Intelligent systems that combine AI efficiency with human insight for optimal decision-making and quality assurance.",
      features: ["Human oversight", "Quality validation", "Strategic decisions", "Flexible control"]
    }
  ];

  const benefits = [
    {
      icon: Cog,
      title: "Increased Efficiency",
      description: "Streamline operations and reduce manual work by up to 80%"
    },
    {
      icon: Target,
      title: "Enhanced Quality",
      description: "Consistent, error-free outputs with built-in quality controls"
    },
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: "Enterprise-grade security with robust failsafe mechanisms"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Our</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Choose from fully automated workflows or hybrid systems that combine 
            AI efficiency with human expertise for maximum impact.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline-accent" 
                  className="group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
              {/* Gradient overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500" />
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;