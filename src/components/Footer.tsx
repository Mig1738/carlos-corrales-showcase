import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Name */}
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
            Carlos Miguel A. Corrales
          </h3>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:corralescarlos1738@gmail.com"
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors group"
            >
              <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Mail className="h-4 w-4" />
              </div>
              <span className="text-sm">corralescarlos1738@gmail.com</span>
            </a>

            <a
              href="https://github.com/Mig1738"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors group"
            >
              <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Github className="h-4 w-4" />
              </div>
              <span className="text-sm">github.com/Mig1738</span>
            </a>

            <a
              href="https://linkedin.com/in/carloscorrales"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors group"
            >
              <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Linkedin className="h-4 w-4" />
              </div>
              <span className="text-sm">linkedin.com/in/carloscorrales</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-primary/20">
            <p className="text-sm text-foreground/50">
              Made by Carlos Miguel A. Corrales
            </p>
            <p className="text-xs text-foreground/30 mt-2">
              © 2025 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
