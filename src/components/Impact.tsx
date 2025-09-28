import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Globe, TrendingUp, Users, ArrowRight } from "lucide-react";

const Impact = () => {
  const stats = [
    { icon: TrendingUp, value: "80%", label: "Productivity Increase" },
    { icon: Users, value: "500+", label: "Workflows Automated" },
    { icon: Globe, value: "15+", label: "Industries Served" },
    { icon: Heart, value: "99%", label: "Client Satisfaction" }
  ];

  const impactAreas = [
    {
      title: "Healthcare Innovation",
      description: "Streamlining patient care workflows and medical research processes to save lives and improve outcomes.",
      impact: "Reduced diagnosis time by 60%"
    },
    {
      title: "Environmental Solutions",
      description: "Optimizing resource usage and waste reduction through intelligent automation systems.",
      impact: "30% reduction in energy consumption"
    },
    {
      title: "Educational Advancement",
      description: "Personalizing learning experiences and automating administrative tasks for better education.",
      impact: "Improved learning outcomes for 10,000+ students"
    }
  ];

  return (
    <section id="impact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Creating Real</span>{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to delivering solutions that don't just improve efficiency—
            they create meaningful positive change for society and the world.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="space-y-8 mb-16">
          {impactAreas.map((area, index) => (
            <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">{area.impact}</span>
                  </div>
                </div>
                <div className="lg:w-px lg:h-24 lg:bg-border hidden lg:block" />
                <div className="flex items-center justify-center lg:w-32">
                  <Heart className="w-16 h-16 text-accent opacity-60 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Make an Impact?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in creating solutions that matter. Let's build something that 
            transforms your business while making a positive difference in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;