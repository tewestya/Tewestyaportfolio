import React, { useState } from 'react';
import { 
  User, 
  Code, 
  Brain, 
  Briefcase, 
  Award, 
  PenTool, 
  Mail, 
  Github, 
  Linkedin, 
  Download,
  ExternalLink,
  Filter,
  ChevronRight
} from 'lucide-react';
import henonDashboard1 from './assets/henon-dashboard-1.png';
import henonDashboard2 from './assets/henon-dashboard-2.png';
import aiTraumaTherapy from './assets/Screenshot 2025-06-03 170542.png';
import novalabsImage from './assets/Screenshot 2025-08-07 210238.png';
import resumeImage from '../file/tewestya cv.png';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'design',
      title: 'Henon EduTech Platform',
      role: 'UI/UX Designer',
      description: 'Designed full school management and adaptive learning systems for KG–12 and college levels.',
      tools: ['Figma'],
      outcome: 'Used by real schools in Ethiopia',
      link: 'https://www.figma.com/design/PnUK67KR0Zi2xzU3u9QJvu/My-works?node-id=0-1&t=Bo9OkcAJQMsgURVi-1',
      ctaLabel: 'Explore glimpse of my work',
      image: henonDashboard1
    },
    {
      id: 2,
      category: 'development',
      title: 'Novalabs',
      role: 'Frontend Developer',
      description: 'Developed dashboard interfaces for both admin and client sides with responsive design and usability improvements.',
      tools: ['React', 'Tailwind CSS'],
      outcome: 'Improved user experience and efficiency',
        link: 'http://196.190.251.203:3000/',
        ctaLabel: 'Open project',
      image: novalabsImage
    },
    {
      id: 3,
      category: 'development',
      title: 'AI/VR Trauma Therapy Platform',
      role: 'Full-stack Researcher (Design + Dev)',
      description: 'A research-based solution combining AI/VR for trauma therapy.',
      tools: ['Python', 'React', 'Jupyter'],
      outcome: 'Research contribution to mental health tech',
      link: '#',
      image: aiTraumaTherapy
    },
    {
      id: 4,
      category: 'ai',
      title: 'Emotion Detection in Tigrigna',
      role: 'ML Engineer',
      description: 'Built a deep learning Transformer-based model to classify emotions in Tigrigna text.',
      tools: ['Python', 'TensorFlow'],
      outcome: '6-emotion classifier supporting local language NLP',
      link: '#',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      category: 'management',
      title: 'ALX Ethiopia Certified Virtual Assistant',
      role: 'Project Management Intern',
      description: 'Managed task pipelines and communication during final project releases.',
      tools: ['Notion', 'Trello'],
      outcome: 'Streamlined project delivery process',
      link: '#',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const skills = {
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Figma', 'Adobe Illustrator'],
    tools: ['Microsoft Word', 'Notion', 'Trello'],
    softSkills: ['Fast learner', 'Team worker', 'Dedicated', 'Creative problem-solver']
  };

  const certifications = [
    { title: 'Virtual Assistant Certificate', org: 'ALX Ethiopia', icon: Award },
    { title: 'AI in Healthcare', org: 'Coursera', icon: Brain },
    { title: 'Responsive Web Design', org: 'freeCodeCamp', icon: Code },
    { title: 'Writing & Research', org: 'R:Ed Africa', icon: PenTool }
  ];

  return (
    <div className="min-h-screen bg-gray-900 font-[Inter,system-ui,sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white">TT Gebrewahd</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                👋 Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Tewestya Teklemariam Gebrewahd
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A passionate{' '}
              <span className="font-semibold text-blue-400">UI/UX Designer</span>,{' '}
              <span className="font-semibold text-blue-400">Frontend Developer</span>,{' '}
              <span className="font-semibold text-blue-400">AI/ML Engineer</span>, and{' '}
              <span className="font-semibold text-blue-400">Content Writer</span>.
            </p>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              I create solutions that blend design, data, and technology to build thriving communities.
            </p>
            
            <div className="italic text-gray-300 text-lg font-medium">
              "If we're doing it, let's do it right."
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="#projects"
                className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={resumeImage}
                download
                className="group border-2 border-gray-700 text-gray-300 px-8 py-4 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              👩‍💻 About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a Computer Science and Engineering graduate—not just by degree, but by passion and skills. 
                I thrive at the intersection of design, development, and AI innovation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a fast learner, a real worker, and someone who brings creativity and clarity to every problem I solve. 
                My dream is to work with global tech companies and build platforms where thriving communities come together.
              </p>
              <a
                href={resumeImage}
                download
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                <h3 className="font-semibold text-white mb-4 flex items-center">
                  <Code className="w-5 h-5 text-blue-400 mr-2" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.techStack.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/40">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                <h3 className="font-semibold text-white mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 text-blue-400 mr-2" />
                  Other Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/40">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                <h3 className="font-semibold text-white mb-4 flex items-center">
                  <User className="w-5 h-5 text-blue-400 mr-2" />
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.softSkills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/40">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              📁 Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-8"></div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { key: 'all', label: 'All Projects' },
                { key: 'design', label: 'UI/UX Design' },
                { key: 'development', label: 'Development' },
                { key: 'ai', label: 'AI/ML' },
                { key: 'management', label: 'Management' }
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                    activeFilter === filter.key
                      ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 border border-gray-700'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  
                  <p className="text-blue-400 font-medium text-sm">{project.role}</p>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/60 text-gray-300 rounded-lg text-xs font-medium border border-gray-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-2 border-t border-gray-600">
                    <p className="text-sm text-gray-400">
                      <span className="font-medium">Outcome:</span> {project.outcome}
                    </p>
                  </div>

                  {project.link && project.ctaLabel && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      {project.ctaLabel}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              📜 Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/40">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-gray-300 text-sm">{cert.org}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Writing & Volunteering Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ✍️ Writing & Volunteering
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-shadow border border-gray-700">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-full flex items-center justify-center border border-blue-500/40">
                <PenTool className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Right for Education Africa</h3>
                <p className="text-blue-400 font-medium">Volunteer Writer</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Published articles in tech, health, and education to a wide African audience, 
              contributing to community knowledge and awareness across diverse topics.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">📬 Let's Connect</h2>
          <p className="text-xl mb-12 opacity-90">
            Ready to collaborate on something amazing? Let's build the future together.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
              { icon: Mail, label: 'Email', value: 'tewestyateklemariam@gmail.com', href: 'mailto:tewestyateklemariam@gmail.com' },
              { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/tewestya-teklemariam' },
              { icon: Github, label: 'GitHub', value: 'GitHub Profile', href: 'https://github.com/tewestya' },
              { icon: Download, label: 'CV', value: 'Download CV', href: resumeImage }
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  download={contact.icon === Download ? '' : undefined}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 border border-white/20"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform text-blue-400" />
                  <p className="font-medium mb-2">{contact.label}</p>
                  <p className="text-sm opacity-80">{contact.value}</p>
                </a>
              );
            })}
          </div>
          
          <div className="text-center opacity-75">
            <p>&copy; 2025 Tewestya Teklemariam Gebrewahd. Built with passion and precision.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;