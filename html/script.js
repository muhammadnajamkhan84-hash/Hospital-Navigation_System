/* =========================================================
   1. DATA — Array of Objects
========================================================= */
const departments = [
  {
    id: 1,
    name: "Reception",
    category: "opd",
    floor: "Ground Floor",
    location: "Main Gate",
    doctor: "N/A",
    contact: "042-111-000-000",
    timing: "24/7 Open",
    days: "all",
    directions: ["Straight ahead as you walk in through the Main Gate"]
  },
  {
    id: 2,
    name: "Pharmacy",
    category: "opd",
    floor: "Ground Floor",
    location: "Main Lobby",
    doctor: "N/A",
    contact: "042-111-000-004",
    timing: "24/7 Open",
    days: "all",
    directions: ["Straight from the Main Entrance", "On the right side of the lobby"]
  },
  {
    id: 3,
    name: "Emergency",
    category: "emergency",
    floor: "Ground Floor",
    location: "Gate 2",
    doctor: "Dr. Ahsan Raza",
    contact: "1122 / 042-111-000-001",
    timing: "24/7 Open",
    days: "all",
    directions: ["Enter through the Main Entrance", "Turn right at Reception", "Emergency is straight ahead at Gate 2"]
  },
  {
    id: 4,
    name: "Laboratory",
    category: "laboratory",
    floor: "Ground Floor",
    location: "Wing C",
    doctor: "Dr. Hina Tariq",
    contact: "042-111-000-005",
    timing: "7:00 AM - 9:00 PM",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    directions: ["Located on the Ground Floor", "Wing C, at the end of the corridor"]
  },
  {
    id: 5,
    name: "Radiology (X-Ray & Ultrasound)",
    category: "opd",
    floor: "Ground Floor",
    location: "Wing B",
    doctor: "Dr. Sara Malik",
    contact: "042-111-000-002",
    timing: "8:00 AM - 8:00 PM",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    directions: ["Straight from the main lobby", "Head towards Wing B"]
  },
  {
    id: 6,
    name: "General OPD",
    category: "opd",
    floor: "Ground Floor",
    location: "Wing A",
    doctor: "Dr. Usman Farooq",
    contact: "042-111-000-006",
    timing: "9:00 AM - 6:00 PM",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    directions: ["Left from the main lobby", "Wing A, rooms 5-10"]
  },
  {
    id: 7,
    name: "ICU (Intensive Care Unit)",
    category: "ward",
    floor: "1st Floor",
    location: "Wing A",
    doctor: "Dr. Kamran Shah",
    contact: "042-111-000-007",
    timing: "24/7 (Visitors: 5-6 PM only)",
    days: "all",
    directions: ["Take the lift to the 1st Floor", "Turn left towards Wing A", "Show ID at reception"]
  },
  {
    id: 8,
    name: "Cardiology Ward",
    category: "ward",
    floor: "1st Floor",
    location: "Wing B",
    doctor: "Dr. Bilal Khan",
    contact: "042-111-000-003",
    timing: "9:00 AM - 5:00 PM",
    days: ["Mon", "Wed", "Fri"],
    directions: ["Take the lift to the 1st Floor", "Turn right towards Wing B", "Get a token from the nurse station"]
  },
  {
    id: 9,
    name: "Orthopedic Ward",
    category: "ward",
    floor: "1st Floor",
    location: "Wing C",
    doctor: "Dr. Fahad Iqbal",
    contact: "042-111-000-008",
    timing: "9:00 AM - 5:00 PM",
    days: ["Tue", "Thu", "Sat"],
    directions: ["Take the lift to the 1st Floor", "Straight ahead to Wing C"]
  },
  {
    id: 10,
    name: "Neurology OPD",
    category: "opd",
    floor: "2nd Floor",
    location: "Wing A",
    doctor: "Dr. Ayesha Noor",
    contact: "042-111-000-009",
    timing: "10:00 AM - 4:00 PM",
    days: ["Mon", "Wed", "Fri"],
    directions: ["Take the lift to the 2nd Floor", "Turn left towards Wing A"]
  },
  {
    id: 11,
    name: "Maternity & Gynecology Ward",
    category: "ward",
    floor: "2nd Floor",
    location: "Wing B",
    doctor: "Dr. Mahnoor Aslam",
    contact: "042-111-000-010",
    timing: "24/7 Open",
    days: "all",
    directions: ["Take the lift to the 2nd Floor", "Turn right towards Wing B", "Get a token from reception"]
  },
  {
    id: 12,
    name: "Pediatric Ward",
    category: "ward",
    floor: "2nd Floor",
    location: "Wing C",
    doctor: "Dr. Zainab Rizvi",
    contact: "042-111-000-011",
    timing: "9:00 AM - 9:00 PM",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    directions: ["Take the lift to the 2nd Floor", "Straight ahead to Wing C"]
  },
  {
    id: 13,
    name: "Operation Theatre (Surgical)",
    category: "ward",
    floor: "3rd Floor",
    location: "Wing A",
    doctor: "Dr. Tariq Mehmood",
    contact: "042-111-000-012",
    timing: "Scheduled Surgeries Only",
    days: "appointment",
    directions: ["Take the lift to the 3rd Floor", "Turn left towards Wing A", "Authorized staff/patients only"]
  },
  {
    id: 14,
    name: "Dialysis Center",
    category: "opd",
    floor: "3rd Floor",
    location: "Wing B",
    doctor: "Dr. Nadia Yousaf",
    contact: "042-111-000-013",
    timing: "7:00 AM - 7:00 PM",
    days: ["Mon", "Wed", "Fri"],
    directions: ["Take the lift to the 3rd Floor", "Turn right towards Wing B"]
  }
];

/* =========================================================
   2. DOM SELECTION —
========================================================= */
const deptGrid      = document.getElementById("deptGrid");
const filterBar      = document.getElementById("filterBar");
const searchInput    = document.getElementById("searchInput");
const searchBtn      = document.getElementById("searchBtn");
const floorPills     = document.getElementById("floorPills");
const floorMap       = document.getElementById("floorMap");
const emergencyBtn   = document.getElementById("emergencyModeBtn");

const modalOverlay   = document.getElementById("modalOverlay");
const modalClose     = document.getElementById("modalClose");
const modalCategory  = document.getElementById("modalCategory");
const modalName      = document.getElementById("modalName");
const modalFloor     = document.getElementById("modalFloor");
const modalDoctor    = document.getElementById("modalDoctor");
const modalContact   = document.getElementById("modalContact");
const modalTiming    = document.getElementById("modalTiming");
const modalDirections = document.getElementById("modalDirections");

let emergencyMode = false;

/* =========================================================
   AVAILABILITY CHECK — 
========================================================= */
function isAvailableToday(dept) {
  if (dept.days === "all") return true; // 24/7 ya har din
  if (dept.days === "appointment") return null; // sirf schedule se

  const today = new Date().toLocaleDateString("en-US", { weekday: "short" }); // e.g. "Mon"
  return dept.days.includes(today);
}

function badgeHTML(dept) {
  const status = isAvailableToday(dept);
  if (status === null) return `<span class="badge closed">By Appointment</span>`;
  return status
    ? `<span class="badge open">Available Today</span>`
    : `<span class="badge closed">Closed Today</span>`;
}

/* =========================================================
   3. RENDER FUNCTION —
========================================================= */
function renderDepartments(list) {
  if (list.length === 0) {
    deptGrid.innerHTML = `<p class="no-result">No department found.</p>`;
    return;
  }

  deptGrid.innerHTML = list
    .map(
      (dept) => `
      <div class="dept-card ${dept.category}" data-id="${dept.id}">
        <h3>${dept.name}</h3>
        <p>${dept.floor} · ${dept.location}</p>
        <span class="tag">${dept.category}</span><br>
        ${badgeHTML(dept)}
      </div>`
    )
    .join("");
}

/* =========================================================
   4. POPUP (MODAL) —
========================================================= */
deptGrid.addEventListener("click", function (e) {
  const card = e.target.closest(".dept-card");
  if (!card) return; // agar card ke bahar click hua to kuch mat karo

  const deptId = Number(card.dataset.id);
  const dept = departments.find((d) => d.id === deptId); // find() se object dhoondna

  openModal(dept);
});

function openModal(dept) {
  modalCategory.textContent = dept.category;
  modalName.textContent = dept.name;
  modalFloor.textContent = `${dept.floor} (${dept.location})`;
  modalDoctor.textContent = dept.doctor;
  modalContact.textContent = dept.contact;
  modalTiming.textContent = dept.days === "all"
    ? `${dept.timing} (Every day)`
    : dept.days === "appointment"
    ? `${dept.timing}`
    : `${dept.timing} (${dept.days.join(", ")})`;

  // directions 
  modalDirections.innerHTML = dept.directions
    .map((step) => `<li>${step}</li>`)
    .join("");

  modalOverlay.classList.add("open");
}

function closeModal() {
  modalOverlay.classList.remove("open");
}

modalClose.addEventListener("click", closeModal);

// Overlay ke bahar (background) click karne par bhi band ho jaye
modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) closeModal();
});

/* =========================================================
   5. FILTER BUTTONS —
========================================================= */
filterBar.addEventListener("click", function (e) {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  // sab buttons se active hatao, isi ko lagao
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  const category = btn.dataset.category;

  let filtered;
  if (category === "all") {
    filtered = departments;
  } else if (category === "today") {
    filtered = departments.filter((d) => isAvailableToday(d) === true); // sirf aaj available wale
  } else {
    filtered = departments.filter((d) => d.category === category); // filter() method
  }

  renderDepartments(filtered);
});

/* =========================================================
   6. SEARCH BAR — toLowerCase() + includes() se case-insensitive search
========================================================= */
function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();

  if (query === "") {
    renderDepartments(departments);
    return;
  }

  const results = departments.filter(
    (d) =>
      d.name.toLowerCase().includes(query) ||
      d.doctor.toLowerCase().includes(query) ||
      d.floor.toLowerCase().includes(query)
  );

  renderDepartments(results);
  document.getElementById("departments").scrollIntoView({ behavior: "smooth" });
}

searchBtn.addEventListener("click", handleSearch);

// Enter key dabane par bhi search ho jaye
searchInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") handleSearch();
});

/* =========================================================
   7. FLOOR SELECTION — 
========================================================= */
floorPills.addEventListener("click", function (e) {
  const pill = e.target.closest(".floor-pill");
  if (!pill) return;

  document.querySelectorAll(".floor-pill").forEach((p) => p.classList.remove("active"));
  pill.classList.add("active");

  const floor = pill.dataset.floor;
  const floorDepts = departments.filter((d) => d.floor === floor);

  if (floorDepts.length === 0) {
    floorMap.innerHTML = `<p>No departments are listed on this floor yet.</p>`;
    return;
  }

  floorMap.innerHTML = `
    <p>Departments on <strong>${floor}</strong>:</p>
    <ul>
      ${floorDepts.map((d) => `<li>${d.name} — ${d.location}</li>`).join("")}
    </ul>`;
});

/* =========================================================
   8. EMERGENCY MODE — 
========================================================= */
emergencyBtn.addEventListener("click", function (e) {
  e.preventDefault(); // link ka default scroll rok kar khud handle karenge

  emergencyMode = !emergencyMode; // toggle: on <-> off
  document.body.classList.toggle("emergency-mode", emergencyMode);

  if (emergencyMode) {
    renderDepartments(departments.filter((d) => d.category === "emergency"));
  } else {
    renderDepartments(departments);
  }

  document.getElementById("departments").scrollIntoView({ behavior: "smooth" });
});

/* =========================================================
   9. INITIAL RENDER — 
========================================================= */
renderDepartments(departments);

/* =========================================================
   10. ROLE BANNER — login page
========================================================= */
const roleBanner = document.getElementById("roleBanner");
const roleMessages = {
  visitor: " Visitor mode — find directions and visiting hours for the person you're here to see.",
  checkup: " Regular Checkup — check your doctor's day and timing below.",
  patient: " Patient mode — your ward/department location and contact details are listed below."
};

const savedRole = localStorage.getItem("userRole");
const savedName = localStorage.getItem("userName");
const greeting = savedName ? `Welcome, ${savedName}! ` : "";

if (savedRole && roleMessages[savedRole]) {
  roleBanner.innerHTML = `${greeting}${roleMessages[savedRole]} <a href="login.html">Switch role</a>`;
} else {
  roleBanner.innerHTML = `You haven't logged in yet. <a href="login.html">Go to login page</a>`;
}

/* =========================================================
   11. DARK MODE TOGGLE
========================================================= */
const themeToggle = document.getElementById("themeToggle");

// Pichli dafa agar dark mode on chhoda tha to yaad rakho
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️ Light";
}

themeToggle.addEventListener("click", function () {
  const isDark = document.body.classList.toggle("dark-mode");
  themeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

/* =========================================================
   12. QUICK ACCESS BUTTONS — Emergency & Reception 
========================================================= */
document.getElementById("quickEmergency").addEventListener("click", function () {
  const dept = departments.find((d) => d.name === "Emergency"); // find() method
  openModal(dept);
});

document.getElementById("quickReception").addEventListener("click", function () {
  const dept = departments.find((d) => d.name === "Reception");
  openModal(dept);
});

/* =========================================================
   13. APPOINTMENT REQUEST FORM
========================================================= */
const apptForm = document.getElementById("apptForm");
const apptDept = document.getElementById("apptDept");
const apptConfirmation = document.getElementById("apptConfirmation");

// Department dropdown ko departments array se hi bharna (loop)
departments.forEach((dept) => {
  const option = document.createElement("option");
  option.value = dept.name;
  option.textContent = dept.name;
  apptDept.appendChild(option);
});

apptForm.addEventListener("submit", function (e) {
  e.preventDefault(); // form ko page reload karne se roko (koi backend nahi hai)

  const name = document.getElementById("apptName").value;
  const dept = apptDept.value;
  const date = document.getElementById("apptDate").value;

  apptConfirmation.textContent = `✅ Thank you, ${name}! Your appointment request for "${dept}" on ${date} has been received. Our team will contact you shortly.`;
  apptConfirmation.classList.add("show");

  apptForm.reset();
});

/* =========================================================
   14. FAQ ACCORDION
========================================================= */
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", function () {
    const item = question.closest(".faq-item");
    const wasOpen = item.classList.contains("open");

    // Pehle sab band karo, phir jo click hua sirf wahi kholo
    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
    if (!wasOpen) item.classList.add("open");
  });
});