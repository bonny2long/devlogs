// Developer Log Entries - IC Stars Learning Journey
let devLogEntries = [];

// Load dev log entries from JSON file
async function loadDevLogs() {
  try {
    const response = await fetch('devJson.json');
    devLogEntries = await response.json();
    initializeApp();
  } catch (error) {
    console.error('Error loading dev logs:', error);
  }
}

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

// Initialize the app after data is loaded
let currentEntriesShown = 1;

function initializeApp() {
  // Initial render - show only the latest entry
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
}

// Load the data when the page loads
loadDevLogs();
