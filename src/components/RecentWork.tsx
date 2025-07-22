// RecentWork.tsx
import '../styles/recentWork.css';

interface ProjectImage {
  src: string;
  title: string;
  description?: string;
}

const projectImages: ProjectImage[] = [
  {
    src: '/images/8.jpeg',
    title: 'Modern Rendering',
    description: 'Contemporary home exterior'
  },
  {
    src: '/images/9.jpeg',
    title: 'Classic Finish',
    description: 'Traditional brick rendering'
  },
  {
    src: '/images/11.jpeg',
    title: 'Premium Quality',
    description: 'Luxury home renovation'
  },
  {
    src: '/images/12.jpeg',
    title: 'Expert Craftsmanship',
    description: 'Commercial building project'
  },
];

const RecentWork = () => {
  return (
    <section className="recent-work">
      <h2 className="gallery-title">Our Recent Work</h2>
      <div className="project-thumbnails">
        {projectImages.map((project, index) => (
          <a
            key={index}
            href="https://www.instagram.com/c_mrendering"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="thumbnail-container">
              <img src={project.src} alt={project.title} className="thumbnail" />
              <div className="thumbnail-overlay">
                {project.title}
                {project.description && (
                  <div className="thumbnail-description">{project.description}</div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default RecentWork;
