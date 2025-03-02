import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Background</h3>
                <p className="text-muted-foreground">
                  I'm a software developer with a passion for creating elegant solutions to complex problems. 
                  With a strong foundation in computer science and a keen eye for detail, I strive to build 
                  applications that make a difference.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <p className="text-muted-foreground">
                  Computer Science graduate with expertise in web development, algorithms, and software architecture.
                  Continuously learning and staying updated with the latest technologies and best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
