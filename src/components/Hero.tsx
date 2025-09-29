import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ai-network.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Transform Your</span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Workflows with AI
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
                InnoSys delivers multi-agent AI workflows that boost productivity, 
                efficiency, and quality while creating meaningful societal impact.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-xs sm:text-sm font-medium">Automated Workflows</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-xs sm:text-sm font-medium">Human-in-Loop</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-xs sm:text-sm font-medium">Multi-Agent AI</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Transformation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline-accent" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="AI Network Visualization - Connected nodes representing InnoSys multi-agent workflows"
                className="w-full h-auto animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-accent rounded-full opacity-60 animate-pulse-glow" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-primary rounded-full opacity-40 animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;