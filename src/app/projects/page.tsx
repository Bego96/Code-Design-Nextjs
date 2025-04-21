'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = [
  {
    id: 1,
    title: 'Modern Office Complex',
    description: 'A sustainable office building featuring innovative design and energy-efficient solutions.',
    image: '/images/projects/office-complex.jpg',
    category: 'Commercial',
  },
  {
    id: 2,
    title: 'Urban Residential Tower',
    description: 'A high-rise residential building with modern amenities and green spaces.',
    image: '/images/projects/residential-tower.jpg',
    category: 'Residential',
  },
  {
    id: 3,
    title: 'Cultural Center',
    description: 'A contemporary cultural hub designed to foster community engagement.',
    image: '/images/projects/cultural-center.jpg',
    category: 'Public',
  },
  {
    id: 4,
    title: 'Sustainable Housing',
    description: 'Eco-friendly residential units with integrated renewable energy systems.',
    image: '/images/projects/sustainable-housing.jpg',
    category: 'Residential',
  },
  {
    id: 5,
    title: 'Mixed-Use Development',
    description: 'A vibrant community space combining retail, residential, and public areas.',
    image: '/images/projects/mixed-use.jpg',
    category: 'Commercial',
  },
  {
    id: 6,
    title: 'Educational Campus',
    description: 'Modern educational facilities designed for optimal learning environments.',
    image: '/images/projects/educational-campus.jpg',
    category: 'Public',
  },
  // Add more projects as needed
];

const ITEMS_PER_PAGE = 6;

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const currentProjects = projects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main>
      <Navbar />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of architectural achievements and innovative designs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    View Details
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-md text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-md text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 