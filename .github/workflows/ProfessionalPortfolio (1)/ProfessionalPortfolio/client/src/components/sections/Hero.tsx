import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export function Hero() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Anshuman_Pandey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Hi, I'm Anshuman Pandey
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A passionate software developer focusing on creating impactful web applications. 
              Crafting elegant solutions to complex problems.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button 
                className="bg-primary/90 hover:bg-primary"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button 
                variant="outline"
                className="gap-2"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10" asChild>
                <a href="https://github.com/satan0166" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10" asChild>
                <a href="https://www.linkedin.com/in/anshumanpandey07/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10" asChild>
                <a href="https://leetcode.com/u/anshuman737/" target="_blank" rel="noopener noreferrer">
                  <SiLeetcode className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-72 h-72 rounded-full overflow-hidden bg-primary/10 backdrop-blur-sm">
              <img 
                src="/linkedin.jpg" 
                alt="Anshuman Pandey"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}