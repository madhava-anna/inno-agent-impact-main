import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-bold">InnoSys</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Transforming workflows with multi-agent AI solutions that create meaningful impact for businesses and society.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Automatic Solutions</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Hybrid Workflows</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Consulting</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Custom Development</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Our Impact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>hello@innosys.ai</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 InnoSys. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground">
              Terms
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground">
              Privacy
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground">
              Cookies
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;