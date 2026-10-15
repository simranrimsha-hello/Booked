const branches = [
  { code: "CSE", name: "Computer Science", icon: "⌘", color: 0 },
  { code: "AIML", name: "AI & Machine Learning", icon: "✧", color: 1 },
  { code: "ECE", name: "Electronics & Communication", icon: "▦", color: 2 },
  { code: "EEE", name: "Electrical & Electronics", icon: "ϟ", color: 3 },
  { code: "ME", name: "Mechanical Engineering", icon: "⚙", color: 4 },
  { code: "CE", name: "Civil Engineering", icon: "⌂", color: 5 },
  { code: "IT", name: "Information Technology", icon: "▣", color: 6 },
  { code: "DS", name: "Data Science", icon: "◈", color: 7 }
];

const syllabus = {
  CSE: {
    1: [
      "Matrices and Calculus",
      "Engineering Physics",
      "Programming for problem solving",
      "Basic Electrical Engineering",
      "Digital logic design"
    ],
    2: [
      "Differential equations and fourier series ",
      "Engineering chemistry",
      "Communicative English",
      "Discrete Mathematics",
    ],
    3: [
      "Data Structures",
      "Computer Organization and Microprocessors",
      "Engineering Mathematics - III(Numerical Methods)",
      "Object Oriented Programming using Java",
      "Principles of Programming Languages",
      "Basic Electronics"
    ],
    4: [
      "Design and Analysis of Algorithms",
      "Engineering Mathematics -IV (Probability & Statistics)",
      "Automata Languages and Computation",
      "Operating Systems",
      "Managerial Economics and Accountancy",
      "Signals and Systems",
      "Data Analytics Using R",
      "Graph Theory",
      "Embedded systems and MicroControllers",
      "Mobile Application Development",
      "Simulation and Modeling",
    ],
    5: [
      "Database management systems",
      "Artificial intelligence and machine learning",
      "Number theory and cryptography",
      "Software engineering",
      "Web programming",
      "Image processing ",
      "Data mining",
      "Computer graphics",
      "Advanced computer architecture ",
      "Software quality and testing "
    ],
    6: [
      "Compiler Design",
      "Computer Networks",
      "Distributed Systems ",
      "Deep Learning",
      "Virtual & Augmented Reality",
      "Information Retrieval System",
      "Block Chain Technologies",
      "Human Computer Interaction",
      "Engineering Applications in Medicine",
      "Human Assistive Technologies",
      "Disaster Management",
      "Road Safety Engineering",
      "Python Programming",
      "Cyber Security",
      "Verilog HDL",
      "Principles of Electronic Communication Systems",
      "Applications of Electrical Energy",
      "Electrical Safety Management",
      "3D Printing Technology",
      "Finite Element Methods"
    ],
    7: [
      "Cloud computing",
      "Generative AI",
      "Computer Vision",
      "Reinforcement Learning",
      "AR&VR",
      "Secure coding principles",
      "Fgpa based system design",
      "Scalable architecture for large applications",
      "Natural language processing",
      "Artificial Intelligence In Health Care",
      "Basic medical equipment",
      "Green building technology",
      "Plumbing technology",
      "Cloud computing",
      "Database management systems",
      "Fundamentals of embedded systems",
      "Introduction to lot",
      "Optimisation techniques",
      "Non conventional energy sources",
      "Nano technology ",
      "Startup entrepreneurship "
    ],
    8: [
      "Environmental Science",
      "Intellectual Property Rights",
      "English for Technical Paper Writing",
      "Constitution of India",
      "Essence of Indian Traditional Knowledge",
      "Stress Management by Yoga",
      "Sports"
    ]
  },

  AIML: {
    1: [
      "Engineering Mathematics I",
      "Programming for Problem Solving",
      "Engineering Physics",
      "Basic Electrical Engineering"
    ],
    2: [
      "Engineering Mathematics II",
      "Data Structures",
      "Digital Logic Design",
      "Object Oriented Programming"
    ],
    3: [
      "Linear Algebra",
      "Probability and Statistics",
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Web Technologies"
    ],
    4: [
      "Machine Learning",
      "Operating Systems",
      "Computer Networks",
      "Artificial Intelligence"
    ],
    5: [
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Cloud Computing"
    ],
    6: [
      "Reinforcement Learning",
      "Big Data Analytics",
      "AI Ethics",
      "Mini Project"
    ],
    7: [
      "Generative AI",
      "MLOps",
      "Major Project I",
      "Open Elective"
    ],
    8: [
      "Internship",
      "Major Project II",
      "Technical Seminar"
    ]
  },

  ECE: {
    1: [
      "Engineering Mathematics I",
      "Engineering Physics",
      "Basic Electrical Engineering",
      "Programming Fundamentals"
    ],
    2: [
      "Engineering Mathematics II",
      "Electronic Devices",
      "Network Analysis",
      "Digital Logic Design"
    ],
    3: [
      "Signals and Systems",
      "Analog Electronics",
      "Electromagnetic Theory",
      "Data Structures"
    ],
    4: [
      "Digital Signal Processing",
      "Control Systems",
      "Microprocessors",
      "Communication Systems"
    ],
    5: [
      "VLSI Design",
      "Embedded Systems",
      "Antenna Theory",
      "Professional Elective"
    ],
    6: [
      "Wireless Communications",
      "Internet of Things",
      "Optical Communication",
      "Mini Project"
    ],
    7: [
      "Satellite Communication",
      "Advanced VLSI",
      "Major Project I"
    ],
    8: [
      "Internship",
      "Major Project II",
      "Technical Seminar"
    ]
  }
};

const subjectResources = {
  "Matrices and Calculus": {
    videos: [
      {title: "EM-I (Gajendra Purohit)", url: "https://www.youtube.com/playlist?list=PLU6SqdYcYsfLPxjd-k-MaoG7qgRQ-2fKc"},
      {title: "Matrices One-Shot & Calculus (Pradeep Giri Academy)", url: "https://www.youtube.com/watch?v=rqkuY4y3m2A"}
    ],
    books: [
      { title: "Higher Engineering Mathematics BS Grewal 42nd Edition", url: "https://archive.org/details/higher-engineering-mathematics-bs-grewal" }
    ],
    study: {
      Notes: [
        { title: "Matrices and Calculus Notes", url: "https://www.brainkart.com/materials/matrices-and-calculus---ma3151-454/notes/"  }
      ],
      PYQs: [],
      "Sample Tests": []
    }
  },
  "Engineering Physics": {
    videos: [
      {title: "Ekeeda - Engineering Physics 1 Course", url: "https://www.youtube.com/playlist?list=PLm_MSClsnwm_xDK55XxYkj3SHVkFsYsHm"},
      {title: "Technical Physics - Engineering Physics Full Syllabus", url: "https://www.youtube.com/playlist?list=PL5zwY2E7i60WDr2Jm0eGHSbzaD0RxkpJh"}
    ],
    books: [
      { title: "Engineering Physics by H.K. Malik", url: "https://www.amazon.in/Engineering-Physics-Hitendra-K-Malik/dp/9352606957" }
    ],
    study: {
      Notes: [
        { title: "Engineering Physics Notes", url: "https://mrcet.com/downloads/digital_notes/HS/R20/Engineering%20Physics.pdf"  }
      ],
      PYQs: [],
      "Sample Tests": []
    }
  },

  "Programming for problem solving": {
    videos: [
      {title: "Fundamentals of C Programming ", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhCACho72kTrlzGXDZBq623"}
    ],
    books: [
      { title: "Programming in ANSI C | 9th Edition | Balagurusamy", url: "https://www.amazon.in/Programming-ANSI-Balagurusamy-McGraw-Hill/dp/9355326726" }
    ],
    study: {
      Notes: [
        { title: "C Programming Digital Notes by Malla Reddy College", url: "https://mrcet.com/downloads/digital_notes/HS/R20/PROGRAMMING%20FOR%20PROBLEM%20SOLVING.pdf"  },
        { title: "C Programming Notes", url: "https://www.geeksforgeeks.org/c-programming-language/"  }
      ],
      PYQs: [],
      "Sample Tests": []
    }
  },

  "Basic Electrical Engineering": {
    videos: [
      {title: "Basic Electrical Engineering (BEE)", url: "https://www.youtube.com/playlist?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc"}
    ],
    books: [
      { title: "A Textbook of Electrical Technology: Volume I, Basic Electrical Engineering", url: "https://www.amazon.in/-/hi/Textbook-Electrical-Technology-Basic-Engineering/dp/B0G3Q1HNWD"  }
    ],
    study: {
      Notes: [
        { title: "Basic Electrical Engineering Notes", url: "https://www.scribd.com/document/800017563/Bee-Hand-Written-Notes-1-1-14"  }
      ],
      PYQs: [],
      "Sample Tests": []
    }
  },

  "Digital logic design": {
    videos: [
      {title: "Digital Logic Design by Gate Smashers", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe"}
    ],
    books: [
      { title: "Digital Logic Design by M. Morris Mano", url: "https://www.auhd.edu.ye/upfiles/elibrary/Azal2020-01-22-12-16-48-75016.pdf" }
    ],
    study: {
      Notes: [
        { title: "Digital Logic Design Digital Notes by MRCET", url: "https://mrcet.com/downloads/digital_notes/IT/DIGITAL%20LOGIC%20DESIGN%20(R17A0461).pdf"  },
        { title: "Digital Logic Design Handwritten Notes", url: "https://www.notesly.in/note/free-handwritten-notes-on-digital-logic-design-dld-unit-1-for-btech-students-computer-science-ec-semester-notes-pdf"  }
      ],
      PYQs: [],
      "Sample Tests": []
    }
  },

  "Differential equations and fourier series ": {
    videos: [
      { title: "Gajendra Purohit (GP Sir) - Differential Equations Playlist", url: "https://www.youtube.com/playlist?list=PLU6SqdYcYsfLPxjd-k-MaoG7qgRQ-2fKc"},
      { title: "Pradeep Giri Academy - Fourier Series Lecture Series", url: "https://www.youtube.com/watch?v=6WJtJ2f_1IU"}
    ],
    books: [
      { title: "GITA Autonomous College - Complete Engineering Mathematics Textbook PDF", url: "https://gita.edu.in/Admin/uploads/1747992171_ebook.pdf" },
      { title: "Higher Engineering Mathematics BS Grewal 42nd Edition", url: "https://archive.org/details/higher-engineering-mathematics-bs-grewal" }
    ],
    study: {
      Notes: [],
      PYQs: [],
      "Sample Tests": []
    }
  },

    "Engineering chemistry": {
    videos: [
      {title: "Gateway Classes Engineering Chemistry Playlist", url: "https://www.youtube.com/watch?v=GrgAfJV2slg"},
      {title: "Digitech Education Engineering Chemistry Course", url: "https://www.youtube.com/playlist?list=PLiYAH68F-CTCHjAiS257nMvSvsJQbQG1e"},
      {title: "Education Point Online Syllabus Lectures", url: "https://www.youtube.com/playlist?list=PLg2LVpcRrOF5BVVKG_DdYRPEaMx6C9XsW" }
    ],
    books: [
      { title: "A Textbook of Electrical Technology: Volume I, Basic Electrical Engineering", url: "https://www.amazon.in/-/hi/Textbook-Electrical-Technology-Basic-Engineering/dp/B0G3Q1HNWD"  }
    ],
    study: {
      Notes: [
        { title: "MRCET Core Engineering Chemistry Notes — Covers energy sources and advanced materials.", url: "https://mrcet.com/downloads/digital_notes/HS/4%20ENGINEERING%20CHEMISTRY.pdf"  }
      ],
      PYQs: [],
      "Sample Tests": []
    }
  },

  "Communicative English": {  
    videos: [],
    books: [
      { title: "Communicative English Textbook", url: "https://www.amazon.in/Technical-Communication-Meenakshi-Raman/dp/0199457492" }
    ],
    study: {
      Notes: [],
      PYQs: [],
      "Sample Tests": []
    }
  },
  
  "Database management systems": {  
    videos: [
      {title: "Database Management Systems (DBMS) by Gate Smashers", url: "https://www.youtube.com/playlist?list=PLn32mJ8RhQWiIgEoD2U3gHoHC3ApDOHas"},
      {title: "Database Management Systems (DBMS) by Knowledge Gate", url: "https://www.youtube.com/watch?v=YRnjGeQbsHQ"}
    ],
    books: [
      { title: "Database System Concepts", url: "https://www.amazon.in/Database-System-Concepts-Abraham-Silberschatz/dp/9390727502" }
    ],
    study: {
      Notes: [
        { title: "Database Management Systems Notes", url: "https://mrcet.com/downloads/digital_notes/CSE/II%20Year/DATABASE%20MANAGEMENT%20SYSTEMS%20(%20R22A0504%20).pdf"  }
      ],
      PYQs: [],
      "Sample Tests": []
    }
  },

  "Artificial intelligence and machine learning": {  
    videos: [
      {title: "Artificial Intelligence and Machine Learning by Gate Smashers", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEXg5BV10k9THtjnS48yI-T"}
    ],
    books: [
      { title: "Machine Learning", url: "https://www.amazon.in/Machine-Learning-Tom-M-Mitchell/dp/1259096955" }
    ],
    study: {
      Notes: [
        { title: "Artificial Intelligence and Machine Learning Notes", url: "https://mrcet.com/downloads/digital_notes/CSE/II%20Year/ARTIFICIAL%20INTELLIGENCE%20AND%20MACHINE%20LEARNING%20(%20R22A0504%20).pdf"  }
      ],
      PYQs: [],
      "Sample Tests": []
    }
  },
  "Number theory and cryptography": {  
    videos: [
      {title: "Number Theory and Cryptography by Neso Academy", url: "https://www.youtube.com/watch?v=JoeiLuFNBc4&list=PLBlnK6fEyqRgJU3EsOYDTW7m6SUmW6kII"}
    ],
    books: [
      { title: "Cryptography and Network Security by William Stallings", url: "https://www.amazon.in/Cryptography-Security-Principles-Practice-Stallings/dp/B0C7159JWT" }
    ],
    study: {
      Notes: [
        { title: "Number Theory and Cryptography Notes", url: "https://nmiet.ac.in/wp-content/uploads/2025/07/Cryptography-Network-Security-1.pdf"  }
      ],
      PYQs: [],
      "Sample Tests": []
    }
  },

  "Software engineering": {  
    videos: [
      {title: "Software Engineering by Gate Smashers", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2"}
    ],
    books: [
      { title: "Web-Readable Textbook: RGPV University — Software Design Process Document", url: "https://www.rgpv.ac.in/campus/CS/Unit-III.pdf" },
      { title: "Amazon India — Software Engineering by Roger S. Pressman", url: "https://www.amazon.in/-/hi/Software-Engineering-Practitioners-Approach-Pressman/dp/9355325045" }
    ],
    study: {
      Notes: [
        { title: "Software Engineering Notes", url: "https://www.rgpvnotes.in/btech/grading-system-old/qp/2019/03/software-engineering-cs-403"  }
      ],
      PYQs: [],
      "Sample Tests": []
    }
  },

"Web programming": {  
    videos: [
      {title: "Web Programming by CodeHelp", url: "https://www.youtube.com/watch?v=Vi9bxu-M-ag&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD"}
    ],
    books: [
      { title: "FreeBookCentre — Open Web Programming E-Books Library ", url: "https://www.freebookcentre.net/Web/Free-Web-Programming-Books-Download.html" },
      { title: "W3Schools Interactive Full-Stack Documentation Portal", url: "https://www.w3schools.com/" },
      { title: "Web Technologies: Black Book by Kogent Learning Solutions", url: "https://www.amazon.in/Web-Technologies-JAVASCRIPT-ASP-NET-Javascript/dp/8177229974/ref=sr_1_1_sspa?crid=1UR8O8HXWXBXB&dib=eyJ2IjoiMSJ9.fUne8L9rckarx5VsDS-jl2K0WQAtxp2EqExh0JmQnuihIVFMzuAsxaalw_BhX_1ki_YjQsfV3203nA2UgoTVEzuJ0A6QK0vAWqeX6Ub4CpVq16ZjEN0jkMErTqzWRgByjDTQ56-uhWSNtj14Ok3uHHUuNdWQqpQqI7PH2V9RfMA.ciWLX9vsZuY6OmnsY9aJRrP4BbYl1xL_EYkysVeFR3g&dib_tag=se&keywords=Web+Technologies+Black+Book+by+Kogent+Learning+Solutions&nsdOptOutParam=true&qid=1791661852&s=books&sprefix=web+technologies+black+book+by+kogent+learning+solutions%2Cstripbooks%2C305&sr=1-1-spons&aref=tSJfIOltFi&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" }
    ],
    study: {
      Notes: [
        { title: "Internet & Web Technology Notes PDF", url: "https://smc.sgoi.org.in/wp-content/uploads/2026/06/INTERNET-AND-WEB-TECHNOLOGY-NOTES.pdf"  }
      ],
      PYQs: [],
      "Sample Tests": []
    }
  }
};

// Recommended reads shown on the home page.
const books = [
  {
    title: "Introduction to Algorithms",
    subject: "Data Structures & Algorithms",
    author: "Thomas H. Cormen et al.",
    rating: "4.35/5",
    type: "Book",
    url: "https://www.cs.mcgill.ca/~akroit/math/compsci/Cormen%20Introduction%20to%20Algorithms.pdf"
  },
  {
    title: "Database System Concepts",
    subject: "Database Management Systems",
    author: "Abraham Silberschatz, Henry F. Korth, and S. Sudarshan",
    rating: "4.5/5",
    type: "Book",
    url: "https://www.mpgcamb.com/wp-content/uploads/2024/12/Abraham-Silberschatz-Henry-F.-Korth-S.-Sudarshan-Database-System-Concepts-McGraw-Hill-Education-2019.pdf"
  },
  {
    title: "Operating System Concepts",
    subject: "Operating Systems",
    author: "Abraham Silberschatz, Peter B. Galvin, and Greg Gagne",
    rating: "4.4/5",
    type: "Book",
    url: "https://os.ecci.ucr.ac.cr/slides/Abraham-Silberschatz-Operating-System-Concepts-10th-2018.pdf"
  },
  {
    title: "Computer Networking: A Top-Down Approach",
    subject: "Computer Networks",
    author: "James F. Kurose and Keith W. Ross",
    rating: "4/5",
    type: "Book",
    url: "https://www.slideshare.net/slideshow/computer-networking_-a-top-down-approach-global-edition-8th-edition-pdf/282949571"
  }
];

let currentBranch = "CSE";
let currentSemester = 3;
let currentSubject = "Data Structures and Algorithms";
let studyTab = "Notes";
let searchTerm = "";

function getSaved() {
  try {
    return JSON.parse(localStorage.getItem("bookedLibrary") || "[]");
  } catch (error) {
    return [];
  }
}

function setSaved(items) {
  localStorage.setItem("bookedLibrary", JSON.stringify(items));
  updateLibraryCount();
}

function updateLibraryCount() {
  const element = document.getElementById("library-count");
  if (element) element.textContent = getSaved().length;
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function setNav(which) {
  document.querySelectorAll(".nav-link").forEach((button, index) => {
    button.classList.toggle(
      "active",
      ["home", "library", "resources"][index] === which
    );
  });
}

function showHome() {
  setNav("home");
  document.getElementById("home-view").classList.remove("hidden");
  document.getElementById("content-view").classList.add("hidden");
  renderHome();
  window.scrollTo(0, 0);
}

function openView(html) {
  document.getElementById("home-view").classList.add("hidden");

  const view = document.getElementById("content-view");
  view.classList.remove("hidden");
  view.innerHTML = html;

  window.scrollTo(0, 0);
}

function showAllBranches() {
  openView(`
    <button class="back-button" onclick="showHome()">← Back to Home</button>
    <div class="page-banner">
      <div class="banner-icon">⌘</div>
      <div>
        <h1>All branches</h1>
        <p>Choose your engineering branch to browse semesters and subjects.</p>
      </div>
    </div>
    <div class="branch-grid">${branchCards()}</div>
  `);
}

function branchCards() {
  return branches.map(branch => `
    <button class="branch-card branch-${branch.color}"
      onclick="openBranch('${esc(branch.code)}')">
      <span class="branch-icon">${esc(branch.icon)}</span>
      <strong>${esc(branch.code)}</strong>
      <small>${esc(branch.name)}</small>
    </button>
  `).join("");
}

function renderHome() {
  const branchList = document.getElementById("branch-list");

  if (branchList) {
    branchList.innerHTML = branches.slice(0, 6).map(branch => `
      <button class="branch-card branch-${branch.color}"
        onclick="openBranch('${esc(branch.code)}')">
        <span class="branch-icon">${esc(branch.icon)}</span>
        <strong>${esc(branch.code)}</strong>
        <small>${esc(branch.name)}</small>
      </button>
    `).join("");
  }

  const popularSubjects = [
    ["Data Structures and Algorithms", "CSE · Semester 3", "⌘"],
    ["Database Management Systems", "CSE · Semester 3", "▤"],
    ["Web Technologies", "CSE · Semester 3", "◇"]
  ];

  const popularContainer = document.getElementById("popular-subjects");

  if (popularContainer) {
    popularContainer.innerHTML = popularSubjects.map(subject => `
      <button class="subject-card"
        onclick="openSubject(${JSON.stringify(subject[0])}, 'CSE', 3)">
        <span class="subject-icon">${esc(subject[2])}</span>
        <span>
          <strong>${esc(subject[0])}</strong>
          <small>${esc(subject[1])}</small>
        </span>
      </button>
    `).join("");
  }

  const recommended = document.getElementById("recommended-books");

  if (recommended) {
    recommended.innerHTML = books.map(bookCard).join("");
  }

  updateLibraryCount();
}

function bookCard(book) {
  const saved = getSaved().some(item => item.title === book.title);

  const link = book.url
    ? `<p style="margin:10px 0 0">
         <a href="${esc(book.url)}" target="_blank" rel="noopener noreferrer"
           style="font-size:11px;color:#287bd0;text-decoration:none">
           View book ↗
         </a>
       </p>`
    : "";

  return `
    <article class="book-card">
      <div class="book-cover">${esc(book.title)}</div>
      <h3>${esc(book.title)}</h3>
      <p class="author">${esc(book.author)}</p>
      <div class="rating">
        ★ ${esc(book.rating)}
        <span style="color:#7d8ca2;font-weight:500">· ${esc(book.subject)}</span>
      </div>
      <div class="book-meta">
        <span class="tag">${esc(book.type)}</span>
        <button class="save-button ${saved ? "saved" : ""}"
          onclick='toggleSave(${JSON.stringify(book).replace(/'/g, "&#39;")})'>
          ${saved ? "✓ Saved" : "+ Save"}
        </button>
      </div>
      ${link}
    </article>
  `;
}

function openBranch(code) {
  currentBranch = code;

  const branch = branches.find(item => item.code === code);
  if (!branch) return;

  // Show only semesters supplied for this branch.
  const branchSyllabus = syllabus[code] || {};
  const semesters = Object.keys(branchSyllabus);

  openView(`
    <button class="back-button" onclick="showHome()">← Back to Home</button>
    <div class="page-banner">
      <div class="banner-icon">${esc(branch.icon)}</div>
      <div>
        <h1>${esc(branch.code)} — ${esc(branch.name)}</h1>
        <p>Choose a semester to view its subjects and learning resources.</p>
      </div>
    </div>
    <h2 class="section-title">Semesters</h2>
    <div class="sem-grid">
      ${semesters.map(semester => `
        <button class="sem-card"
          onclick="openSemester('${esc(code)}', ${Number(semester)})">
          <span>
            <strong>Semester ${esc(semester)}</strong>
            <small style="display:block;color:#8392a8;margin-top:6px">
              ${branchSyllabus[semester].length} subjects
            </small>
          </span>
          <span>→</span>
        </button>
      `).join("")}
    </div>
  `);
}

function openSemester(code, semester) {
  currentBranch = code;
  currentSemester = Number(semester);

  const branch = branches.find(item => item.code === code);
  const subjects = (syllabus[code] || {})[semester] || [];

  if (!branch) return;

  openView(`
    <button class="back-button" id="back-to-semesters">
      ← Back to semesters
    </button>

    <div class="page-banner">
      <div class="banner-icon">📚</div>
      <div>
        <h1>Semester ${Number(semester)} · ${esc(branch.code)}</h1>
        <p>Select a subject to explore videos, books and useful links.</p>
      </div>
    </div>

    <h2 class="section-title">Subjects</h2>
    <div class="subject-list" id="subject-list">
      ${subjects.map((subject, index) => `
        <button class="subject-row" data-subject-index="${index}">
          <span>
            <strong>${esc(subject)}</strong>
            <small>${esc(branch.code)} · Semester ${Number(semester)} · Subject ${index + 1}</small>
          </span>
          <span>→</span>
        </button>
      `).join("")}
    </div>
  `);

  document
    .getElementById("back-to-semesters")
    .addEventListener("click", () => openBranch(code));

  document.querySelectorAll("#subject-list .subject-row").forEach((button, index) => {
    button.addEventListener("click", () => {
      openSubject(subjects[index], code, Number(semester));
    });
  });
}


function getSubjectResources(subject) {
  return subjectResources[subject] || {
    videos: [],
    books: [],
    notes: [],
    pyqs: [],
    tests: []
  };
}

function openSubject(subject, code = "CSE", semester = 3) {
  currentSubject = subject;
  currentBranch = code;
  currentSemester = Number(semester);

  const branch = branches.find(item => item.code === code) || branches[0];
  const resources = getSubjectResources(subject);

  const videoItems = resources.videos.length
    ? resources.videos.map(item => `
        <div class="resource-item">
          <div>
            <strong>${esc(item.title)}</strong>
          </div>
          <a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">
            Watch ↗
          </a>
        </div>
      `).join("")
    : `<p class="demo-note">No video links have been added for this subject yet.</p>`;

  const bookItems = resources.books.length
    ? resources.books.map(item => `
        <div class="resource-item">
          <div>
            <strong>${esc(item.title)}</strong>
            <small>${esc(item.detail || "")}</small>
          </div>
          <a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">
            Open book ↗
          </a>
        </div>
      `).join("")
    : `<p class="demo-note">No book links have been added for this subject yet.</p>`;

  const firstResourceUrl =
    resources.videos[0]?.url ||
    resources.books[0]?.url ||
    "";

  const savedItem = {
    title: subject,
    author: "Subject resource",
    subject: `${code} · Semester ${Number(semester)}`,
    rating: "—",
    type: "Course",
    url: firstResourceUrl
  };

  openView(`
    <button class="back-button" id="back-to-subjects">
      ← Back to subjects
    </button>

    <div class="page-banner">
      <div class="banner-icon">▶</div>
      <div>
        <h1>${esc(subject)}</h1>
        <p>${esc(branch.code)} · Semester ${Number(semester)} · Learning resources</p>
      </div>
    </div>

    <div class="resource-columns">
      <section class="resource-panel">
        <h2>▶ Free video resources</h2>
        ${videoItems}
      </section>

      <section class="resource-panel">
        <h2>📖 Recommended books</h2>
        ${bookItems}

        <div class="resource-item">
          <div>
            <strong>Save this subject</strong>
            <small>Add this topic to your personal library</small>
          </div>
          <button class="save-button"
            onclick='toggleSave(${JSON.stringify(savedItem).replace(/'/g, "&#39;")})'>
            + Save
          </button>
        </div>
      </section>
    </div>

    <section class="content-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">KEEP GOING</p>
          <h2>More study resources</h2>
        </div>
      </div>
      <div class="resource-tile-grid">
        ${resourceTiles(subject, resources)}
      </div>
    </section>
  `);

  document.getElementById("back-to-subjects").addEventListener("click", () => {
    openSemester(code, Number(semester));
  });
}


function resourceTiles(subject, resources) {
  const categories = [
    { key: "Notes", icon: "📝", description: "Notes and summaries" },
    { key: "PYQs", icon: "📄", description: "Previous year questions" },
    { key: "Sample Tests", icon: "✓", description: "Practice tests" }
  ];

  return categories.map(category => {
    const items = resources.study?.[category.key] || [];

    const links = items.length
      ? items.map(item => `
          <p>
            <a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">
              ${esc(item.title)} ↗
            </a>
          </p>
        `).join("")
      : `<p class="demo-note">Add a verified link for this ${esc(category.key)} resource.</p>`;

    return `
      <article class="resource-tile">
        <span class="tile-icon">${category.icon}</span>
        <h3>${esc(category.key)}</h3>
        <p>${esc(category.description)} for ${esc(subject)}.</p>
        ${links}
      </article>
    `;
  }).join("");
}

function toggleSave(item) {
  const list = getSaved();
  const index = list.findIndex(savedItem => savedItem.title === item.title);

  if (index >= 0) {
    list.splice(index, 1);
  } else {
    list.push(item);
  }

  setSaved(list);

  const homeView = document.getElementById("home-view");
  const contentView = document.getElementById("content-view");

  if (homeView && !homeView.classList.contains("hidden")) {
    renderHome();
  } else if (contentView && contentView.innerHTML.includes("My Library")) {
    showLibrary();
  } else {
    // Refresh the current subject page so the saved state is reflected.
    openSubject(currentSubject, currentBranch, currentSemester);
  }
}

function showLibrary() {
  setNav("library");

  const list = getSaved();

  openView(`
    <button class="back-button" onclick="showHome()">← Back to Home</button>

    <div class="page-banner">
      <div class="banner-icon">▣</div>
      <div>
        <h1>My Library</h1>
        <p>Your saved books, courses and useful links. Saved items stay in this browser.</p>
      </div>
    </div>

    ${list.length
      ? `<div class="resource-tile-grid">
          ${list.map((item, index) => `
            <article class="resource-tile">
              <span class="tile-icon">
                ${item.type === "Book" ? "📘" : item.type === "Course" ? "▶" : "🔗"}
              </span>
              <h3>${esc(item.title)}</h3>
              <p>${esc(item.author || "")}${item.subject ? " · " + esc(item.subject) : ""}</p>
              <p>Rating: ${esc(item.rating || "—")} · ${esc(item.type || "Resource")}</p>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                ${item.url
                  ? `<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">Open resource ↗</a>`
                  : ""}
                <button class="save-button" onclick="removeSaved(${index})">Remove</button>
              </div>
            </article>
          `).join("")}
        </div>`
      : `<div class="empty-state">
          <div class="big">📚</div>
          <h2>Your library is waiting</h2>
          <p>Save a book or subject resource and it will appear here.</p>
          <button class="save-button" onclick="showHome()">Browse recommendations</button>
        </div>`
    }
  `);
}

function removeSaved(index) {
  const list = getSaved();
  list.splice(index, 1);
  setSaved(list);
  showLibrary();
}

function showStudyResources() {
  setNav("resources");
  studyTab = "Notes";
  renderStudyResources();
}

function renderStudyResources() {
  const options = ["Notes", "PYQs", "Sample Tests"];

  const descriptions = {
    Notes: [
      ["📝", "Subject notes", "Class notes, summaries and revision sheets"],
      ["📚", "Reference notes", "Topic-wise study notes"],
      ["📌", "Quick revision", "Key formulas and definitions"]
    ],
    PYQs: [
      ["📄", "Previous year papers", "Practice with past exam questions"],
      ["🗂️", "Solved papers", "Review worked solutions"],
      ["🎯", "Frequently asked topics", "Use as a revision aid, not a guarantee"]
    ],
    "Sample Tests": [
      ["✓", "Mock test", "Test your understanding under timed conditions"],
      ["⏱️", "Quick quiz", "Short topic-wise practice"],
      ["🏆", "Practice challenge", "Mixed questions for revision"]
    ]
  };

  const cards = descriptions[studyTab].map(item => `
    <article class="resource-tile">
      <span class="tile-icon">${item[0]}</span>
      <h3>${esc(item[1])}</h3>
      <p>${esc(item[2])}</p>
      <span class="demo-note">Add verified links under subjectResources.</span>
    </article>
  `).join("");

  openView(`
    <button class="back-button" onclick="showHome()">← Back to Home</button>

    <div class="page-banner">
      <div class="banner-icon">▤</div>
      <div>
        <h1>Study Resources</h1>
        <p>Find notes, previous year question papers and sample tests.</p>
      </div>
    </div>

    <div class="tabs">
      ${options.map(option => `
        <button class="tab ${studyTab === option ? "active" : ""}"
          onclick="studyTab = ${JSON.stringify(option)}; renderStudyResources()">
          ${esc(option)}
        </button>
      `).join("")}
    </div>

    <div class="resource-tile-grid">${cards}</div>
    <p class="demo-note">Add verified links to your subjectResources data for each subject.</p>
  `);
}

function showAllSubjects() {
  const allSubjects = [];

  Object.entries(syllabus).forEach(([code, semesters]) => {
    Object.entries(semesters).forEach(([semester, subjects]) => {
      subjects.forEach(subject => {
        allSubjects.push({ subject, code, semester });
      });
    });
  });

  openView(`
    <button class="back-button" onclick="showHome()">← Back to Home</button>

    <div class="page-banner">
      <div class="banner-icon">◇</div>
      <div>
        <h1>Popular subjects</h1>
        <p>Choose a subject to open its learning resources.</p>
      </div>
    </div>

    <div class="subject-list">
      ${allSubjects.slice(0, 50).map(item => `
        <button class="subject-row"
          onclick="openSubject(${JSON.stringify(item.subject)}, ${JSON.stringify(item.code)}, ${Number(item.semester)})">
          <span>
            <strong>${esc(item.subject)}</strong>
            <small>${esc(item.code)} · Semester ${Number(item.semester)}</small>
          </span>
          <span>→</span>
        </button>
      `).join("")}
    </div>
  `);
}

function searchEverything(query) {
  searchTerm = query.trim().toLowerCase();

  const panel = document.getElementById("search-results");
  if (!panel) return;

  if (!searchTerm) {
    panel.classList.add("hidden");
    panel.innerHTML = "";
    return;
  }

  const results = [];

  branches.forEach(branch => {
    const text = `${branch.code} ${branch.name}`.toLowerCase();

    if (text.includes(searchTerm)) {
      results.push({
        title: `${branch.code} — ${branch.name}`,
        subtitle: "Branch",
        action: `openBranch(${JSON.stringify(branch.code)})`
      });
    }
  });

  Object.entries(syllabus).forEach(([code, semesters]) => {
    Object.entries(semesters).forEach(([semester, subjects]) => {
      subjects.forEach(subject => {
        if (subject.toLowerCase().includes(searchTerm)) {
          results.push({
            title: subject,
            subtitle: `${code} · Semester ${semester}`,
            action: `openSubject(${JSON.stringify(subject)}, ${JSON.stringify(code)}, ${Number(semester)})`
          });
        }
      });
    });
  });

  books.forEach(book => {
    const text = `${book.title} ${book.author} ${book.subject}`.toLowerCase();

    if (text.includes(searchTerm)) {
      results.push({
        title: book.title,
        subtitle: `Book · ${book.author}`,
        action: book.url
          ? `window.open(${JSON.stringify(book.url)}, '_blank')`
          : ""
      });
    }
  });

  if (results.length) {
    panel.innerHTML = results.slice(0, 12).map(result => `
      <div class="result-row">
        <div>
          <strong>${esc(result.title)}</strong>
          <div style="font-size:12px;color:#8392a8;margin-top:3px">
            ${esc(result.subtitle)}
          </div>
        </div>
        <button ${result.action ? `onclick="${esc(result.action)}"` : "disabled"}>
          ${result.action ? "Open →" : "No link"}
        </button>
      </div>
    `).join("");
  } else {
    panel.innerHTML = `
      <div class="result-row">
        No matching subjects or books. Try another keyword.
      </div>
    `;
  }

  panel.classList.remove("hidden");
}

const searchInput = document.getElementById("search-input");
if (searchInput) {
  searchInput.addEventListener("input", event => {
    searchEverything(event.target.value);
  });
}

const clearSearch = document.getElementById("clear-search");
if (clearSearch) {
  clearSearch.addEventListener("click", () => {
    if (searchInput) {
      searchInput.value = "";
      searchEverything("");
      searchInput.focus();
    }
  });
}

renderHome();