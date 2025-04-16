// Light/Dark Mode Toggle
const toggleBtn = document.getElementById('toggleMode');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Apply saved theme on load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (toggleBtn) toggleBtn.textContent = '☀️';
  } else {
    if (toggleBtn) toggleBtn.textContent = '🌙';
  }

  // If on courses page, generate course cards
  if (document.getElementById('coursesContainer')) {
    renderCourses();
  }

  // If on course detail page, load course content
  if (window.location.pathname.includes('course.html')) {
    loadCourseDetails();
  }
});

// Course Data
const courses = [
  {
    name: "HTML",
    id: "html",
    description: "Learn the basics of HTML and webpage structure.",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    video: "https://www.youtube.com/embed/UB1O30fR-EE"
  },
  {
    name: "CSS",
    id: "css",
    description: "Master styling with Cascading Style Sheets.",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    video: "https://www.youtube.com/embed/yfoY53QXEnI"
  },
  {
    name: "JavaScript",
    id: "javascript",
    description: "Interactive websites with JavaScript.",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    video: "https://www.youtube.com/embed/W6NZfCO5SIk"
  },
  {
    name: "Python",
    id: "python",
    description: "Easy-to-learn language for all purposes.",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc"
  },
  {
    name: "Node.js",
    id: "nodejs",
    description: "Backend JavaScript with Node.js.",
    logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    video: "https://www.youtube.com/embed/TlB_eWDSMt4"
  },
  {
    name: "MongoDB",
    id: "mongodb",
    description: "NoSQL database used with modern web apps.",
    logo: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
    video: "https://www.youtube.com/embed/Of1qQe9a4EY"
  },
  {
    name: "Java",
    id: "java",
    description: "Object-oriented programming with Java.",
    logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    video: "https://www.youtube.com/embed/GoXwIVyNvX0"
  },
  {
    name: "Bootstrap",
    id: "bootstrap",
    description: "Responsive design framework for modern UIs.",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    video: "https://www.youtube.com/embed/-qfEOE4vtxE"
  },
  {
    name: "C",
    id: "c",
    description: "Low-level programming language foundation.",
    logo: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    video: "https://www.youtube.com/embed/KJgsSFOSQv0"
  },
  {
    name: "C++",
    id: "cpp",
    description: "Object-oriented extension of C.",
    logo: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    video: "https://www.youtube.com/embed/vLnPwxZdW4Y"
  },
  {
    name: "Linux",
    id: "linux",
    description: "Open-source OS used in servers & systems.",
    logo: "https://cdn-icons-png.flaticon.com/512/6124/6124993.png",
    video: "https://www.youtube.com/embed/IVquJh3DXUA"
  }
];

// Render Course Cards
function renderCourses() {
  const container = document.getElementById('coursesContainer');
  courses.forEach(course => {
    const div = document.createElement('div');
    div.className = 'course-card';
    div.innerHTML = `
      <img src="${course.logo}" alt="${course.name}" />
      <h3>${course.name}</h3>
      <p>${course.description}</p>
    `;
    div.onclick = () => {
      window.location.href = `course.html?course=${course.id}`;
    };
    container.appendChild(div);
  });
}

// Load Course Details on course.html
function loadCourseDetails() {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get('course');
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    document.getElementById('courseTitle').innerText = "Course Not Found";
    return;
  }

  document.getElementById('courseTitle').innerText = course.name;
  document.getElementById('courseDescription').innerText = course.description;
  document.getElementById('courseVideo').src = course.video;
}
