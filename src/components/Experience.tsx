import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <h2 className="mb-4">Experience</h2>

      <div className="mb-4">
        <h5><strong>Izmo Ltd – Associate Software Engineer (Frontend Developer)</strong></h5>
        <p className="text-muted">Jan 2023 – Present</p>
        <div className="experience">
          <p>Responsible for designing, developing, and maintaining user interfaces for web applications using React, JavaScript, Bootstrap 5, CSS, and HTML.</p>
          <p>Maintained design consistency and user experience across multiple web platforms.</p>
          <p>Worked on multiple Izmoweb templates across various dealer websites.</p>
          <p>Played a key role in migrating all dealer websites from legacy HTML/CSS codebases to modern, scalable architecture using React and Bootstrap 5.</p>
          <p>Developed reusable components for Izmoweb dealer sites and optimized page performance.</p>
        </div>
      </div>

      <div>
        <h5><strong>CBRE – UI Engineer</strong></h5>
        <p className="text-muted">July 2021 – Dec 2022</p>
        <div className="experience">
          <p>Developed internal tools and enterprise web applications using HTML, CSS, and JavaScript.</p>
          <p>Collaborated with cross-functional teams to build dashboards, portals, and productivity tools.</p>
          <p>Ensured cross-browser compatibility and optimized performance for better usability.</p>
        </div>
      </div>

      <strong>
        You can find more details about me here:{" "}
        <a
          href="https://drive.google.com/file/d/11Xa5FwBb0Lj_NhIjr1C8MZ7TqVS7sIVf/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
           My Resume
        </a>
      </strong>
    </section>
  );
};

export default Experience;
