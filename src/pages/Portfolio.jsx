// Import dependencies
import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  // Define project data
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A full-featured e-commerce platform with advanced product management and analytics.",
      imageUrl:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Development",
      description:
        "Cross-platform mobile app for tracking workouts and nutrition with social features.",
      imageUrl:
        "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Financial Dashboard",
      category: "Web Development",
      description:
        "Real-time financial analytics dashboard with advanced data visualization.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Healthcare Platform",
      category: "Web Development",
      description:
        "Telemedicine platform connecting patients with healthcare providers.",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Smart Home App",
      category: "Mobile Development",
      description:
        "IoT control app for managing smart home devices and automation.",
      imageUrl:
        "https://images.unsplash.com/photo-1558002038-bb4237b50b11?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Learning Management System",
      category: "Web Development",
      description:
        "Educational platform with course management and student progress tracking.",
      imageUrl:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const [filter, setFilter] = React.useState("All");

  const categories = ["All", "Web Development", "Mobile Development"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen pt-16">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-emerald-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl font-bold mb-6"
            >
              Our Portfolio
            </motion.h1>
            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-xl text-emerald-100 max-w-3xl mx-auto"
            >
              Explore our latest projects and see how we've helped businesses
              transform their digital presence.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 mx-2 text-sm rounded-full ${
                filter === category
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-emerald-700">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
