import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MindWave",
    description: "A specialized interface for evaluating emotional responses using attached sensors. Features real-time analysis and neurofeedback therapy protocols.",
    tech: ["Python", "TensorFlow", "Streamlit", "Scikit-learn", "Matplotlib"],
    achievements: [
      "Achieved 93.4% accuracy on emotion classification testing",
      "15% improvement in neurofeedback therapy protocols",
      "Reduced model training time by 30 hours"
    ],
    github: "https://github.com/satan0166/mindwave",
    date: "October 2024 - November 2024"
  },
  {
    title: "B2Me",
    description: "An online bookshop website with comprehensive book management and user interaction features.",
    tech: ["Java", "MySQL", "HTML", "CSS", "JavaScript", "Eclipse"],
    achievements: [
      "Integrated 100+ books into MySQL database",
      "Created responsive and interactive interfaces",
      "Implemented wishlist and reservation features"
    ],
    github: "https://github.com/satan0166/b2me",
    date: "March 2023 - April 2023"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{project.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary text-sm px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="list-disc list-inside mb-4 text-sm text-muted-foreground">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="mb-1">{achievement}</li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}