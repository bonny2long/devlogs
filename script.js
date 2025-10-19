// Developer Log Entries - IC Stars Learning Journey
const devLogEntries = [
  {
    date: "9-9-2024",
    entryNumber: 1,
    week: "Week 1",
    topic: "Web Development Basics",
    description:
      "Today I started building my developer log website using HTML, CSS, and JavaScript. This marks the beginning of my journey at IC Stars!",
  },
  {
    date: "9-17-2024",
    entryNumber: 2,
    week: "Week 2",
    topic: "Power BI",
    description:
      "This week I learned about Power BI and data visualization. I explored how to create dashboards, connect to data sources, and transform data to create meaningful insights.",
  },
  {
    date: "9-23-2024",
    entryNumber: 3,
    week: "Week 3",
    topic: "Git & Version Control",
    description:
      "Learned how to use Git for version control. Practiced creating repositories, making commits, branching, merging, and collaborating with others using GitHub.",
  },

  {
    date: "10-1-2024",
    entryNumber: 4,
    week: "Week 4",
    topic: "SDLC (Software Development Life Cycle)",
    description:
      "Studied the Software Development Life Cycle. Learned about different phases including planning, analysis, design, implementation, testing, and maintenance.",
  },
  {
    date: "10-9-2024",
    entryNumber: 5,
    week: "Week 5",
    topic: "Microsoft SQL",
    description:
      "Dove into Microsoft SQL and database management. Learned about creating tables, writing queries, joins, and understanding relational database concepts.",
  },
];

// Function to render dev log entries
function renderDevLogs(entriesToShow) {
  const mainContent = document.querySelector(".main-content");
  const existingLogs = mainContent.querySelectorAll(".dev-log");
  existingLogs.forEach((log) => log.remove());

  const actionBtn = document.getElementById("actionBtn");

  // Sort entries by entry number descending (newest first)
  const sortedEntries = [...devLogEntries]
    .sort((a, b) => b.entryNumber - a.entryNumber)
    .slice(0, entriesToShow);

  sortedEntries.forEach((entry) => {
    const devLogDiv = document.createElement("div");
    devLogDiv.className = "dev-log";

    devLogDiv.innerHTML = `
      <p class="date">DATE: ${entry.date}</p>
      <h3>Entry #${entry.entryNumber} - ${entry.week}</h3>
      <h3>Bonny Makaniankhondo</h3>
      <h4 style="color: #3b82f6; margin-top: 0.5rem;">${entry.topic}</h4>
      <p>${entry.description}</p>
    `;

    mainContent.insertBefore(devLogDiv, actionBtn);
  });
}

// Initial render - show only the latest entry
let currentEntriesShown = 1;
renderDevLogs(currentEntriesShown);

// Button functionality - toggle between showing more and less
document.getElementById("actionBtn").addEventListener("click", () => {
  if (currentEntriesShown < devLogEntries.length) {
    currentEntriesShown = devLogEntries.length;
    document.getElementById("actionBtn").textContent = "Show Less";
  } else {
    currentEntriesShown = 1;
    document.getElementById("actionBtn").textContent = "See More";
  }
  renderDevLogs(currentEntriesShown);
});
