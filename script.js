/* ==========================================================================
   QUALIFIA NAYYARA AMMARANI - SOFTWARE QUALITY ASSURANCE PORTFOLIO
   Interactive Logic & QA Workbench Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  initBackgroundCanvas();
  initTiltCard();
  initScrollEffects();
  initMobileNav();
  initQAWorkbench();
  initDatacomViewer();
  initSIMRSMapping();
});

/* --------------------------------------------------------------------------
   1. TYPING EFFECT
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const roles = [
    "Aspiring Software QA (Manual & Functional Testing)",
    "Functional Testing & Debugging",
    "Jira for QA Testing (Coursera)",
    "Technical Documentation & User Manuals",
    "Master's Student in Computer Science | Telkom University"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const targetEl = document.getElementById('typing-text');

  if (!targetEl) return;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      targetEl.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      targetEl.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? 30 : 65;

    if (!isDeleting && charIdx === currentRole.length) {
      delay = 2400;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 450;
    }

    setTimeout(type, delay);
  }

  type();
}

/* --------------------------------------------------------------------------
   2. PARTICLES BACKGROUND CANVAS (Emerald & Teal Assurance)
   -------------------------------------------------------------------------- */
function initBackgroundCanvas() {
  const canvas = document.getElementById('canvas-bg');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 22), 60);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? 'rgba(16, 185, 129, ' : 'rgba(20, 184, 166, ',
      alpha: Math.random() * 0.35 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();

      // Connect nodes within proximity
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const lineAlpha = (1 - dist / 130) * 0.14;
          ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* --------------------------------------------------------------------------
   3. 3D TILT EFFECT ON HERO PROFILE CARD
   -------------------------------------------------------------------------- */
function initTiltCard() {
  const card = document.querySelector('.profile-frame-wrap');
  if (!card) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = (y / (rect.height / 2)) * -9;
    const rotY = (x / (rect.width / 2)) * 9;

    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

/* --------------------------------------------------------------------------
   4. SCROLL EFFECTS & NAVBAR ACTIVE STATE
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Navbar glass effect on scroll
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlighting
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. MOBILE NAVIGATION TOGGLE
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    toggleBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

/* --------------------------------------------------------------------------
   6. QA WORKBENCH ENGINE (32 REAL TEST CASES & JIRA DEFECT INTEGRATION)
   -------------------------------------------------------------------------- */

const testCasesData = [
  {
    "ID": "TC-001",
    "Module": "Login",
    "Title": "Valid username and valid password",
    "Type": "Positive",
    "Precondition": "User account exists; login page open",
    "Steps": "1. Enter valid username\n2. Enter valid password\n3. Click Login",
    "TestData": "Admin / admin123",
    "Expected": "Login succeeds; user redirected to dashboard page",
    "Actual": "Login success; dashboard page shown with full widget layout",
    "Status": "Pass"
  },
  {
    "ID": "TC-002",
    "Module": "Login",
    "Title": "Valid username, wrong password",
    "Type": "Negative",
    "Precondition": "User account exists; login page open",
    "Steps": "1. Enter valid username\n2. Enter wrong password\n3. Click Login",
    "TestData": "Admin / wrongpass",
    "Expected": "Error message displayed; access denied; no session created",
    "Actual": "Login not success; Error message 'Invalid credentials' displayed",
    "Status": "Pass"
  },
  {
    "ID": "TC-003",
    "Module": "Login",
    "Title": "Wrong username, valid password",
    "Type": "Negative",
    "Precondition": "User account exists; login page open",
    "Steps": "1. Enter wrong username\n2. Enter valid password\n3. Click Login",
    "TestData": "wronguser / admin123",
    "Expected": "Error message displayed; access denied; no session created",
    "Actual": "Login success; dashboard page shown unexpectedly",
    "Status": "Fail",
    "jira": {
      "key": "QA-OHRM-103",
      "severity": "CRITICAL",
      "priority": "Highest",
      "summary": "Critical Auth Bypass: Invalid username with valid password bypasses authentication check",
      "description": "Entering an unregistered username alongside a recognized password allows unauthorized authentication, redirecting directly to the internal dashboard.",
      "impact": "High Security Vulnerability: Unauthorized actors can breach accounts and view sensitive employee data without holding legitimate user identity credentials.",
      "rootCause": "Backend authentication logic validates password hash against orphaned session hashes without verifying active username database record first.",
      "remediation": "Enforce atomic authentication query: Verify username existence and active state in database before verifying password hash. Return unified 'Invalid credentials' error."
    }
  },
  {
    "ID": "TC-004",
    "Module": "Login",
    "Title": "Both fields empty",
    "Type": "Negative",
    "Precondition": "User account exists; login page open",
    "Steps": "1. Leave both fields empty\n2. Click Login",
    "TestData": "(empty)",
    "Expected": "'Required' validation message displayed on both fields",
    "Actual": "Show 'Required' message for both fields; form submission blocked",
    "Status": "Pass"
  },
  {
    "ID": "TC-005",
    "Module": "Login",
    "Title": "Username filled, password empty",
    "Type": "Negative",
    "Precondition": "User account exists; login page open",
    "Steps": "1. Enter username\n2. Leave password empty\n3. Click Login",
    "TestData": "admin / (empty)",
    "Expected": "'Password required' validation message displayed",
    "Actual": "Show 'Required' message under password field; submission halted",
    "Status": "Pass"
  },
  {
    "ID": "TC-006",
    "Module": "Login",
    "Title": "Password is masked while typing",
    "Type": "UI",
    "Precondition": "User account exists; login page open",
    "Steps": "1. Type any characters into the password field",
    "TestData": "SecretPass#2026",
    "Expected": "Characters shown as masked dots; input type is 'password'",
    "Actual": "Characters masked securely as dots; plain text obscured",
    "Status": "Pass"
  },
  {
    "ID": "TC-007",
    "Module": "Login",
    "Title": "Username with leading/trailing spaces",
    "Type": "Boundary",
    "Precondition": "User account exists; login page open",
    "Steps": "1. Enter username with leading/trailing spaces\n2. Enter valid password\n3. Click Login",
    "TestData": "  admin  ",
    "Expected": "Consistent behavior; input trimmed or validated properly",
    "Actual": "Login not success; Error message 'Invalid credentials' displayed",
    "Status": "Pass"
  },
  {
    "ID": "TC-008",
    "Module": "Login",
    "Title": "Very long username (255+ chars)",
    "Type": "Boundary",
    "Precondition": "User account exists; login page open",
    "Steps": "1. Paste 255+ characters into username\n2. Click Login",
    "TestData": "255+ character alphanumeric string",
    "Expected": "Handled gracefully; no buffer overflow, server crash, or SQL error",
    "Actual": "Handled gracefully; input constrained safely without server crash",
    "Status": "Pass"
  },
  {
    "ID": "TC-009",
    "Module": "Login",
    "Title": "Special characters / SQL-like input (SQL Injection)",
    "Type": "Negative",
    "Precondition": "User account exists; login page open",
    "Steps": "1. Enter injection-style string in username\n2. Click Login",
    "TestData": "' OR 1=1 --",
    "Expected": "Input rejected/sanitized; no database error or exception leak",
    "Actual": "Rejected cleanly; no technical database details exposed",
    "Status": "Pass"
  },
  {
    "ID": "TC-010",
    "Module": "Login",
    "Title": "Press Enter key instead of clicking Login button",
    "Type": "Usability",
    "Precondition": "User account exists; login page open",
    "Steps": "1. Enter valid credentials\n2. Press keyboard Enter key",
    "TestData": "Admin / admin123",
    "Expected": "Form submits automatically upon Enter keypress",
    "Actual": "Form submits; login succeeds; dashboard page shown",
    "Status": "Pass"
  },
  {
    "ID": "TC-011",
    "Module": "Login",
    "Title": "Browser Back button after logout",
    "Type": "Navigation",
    "Precondition": "User is authenticated and logged in",
    "Steps": "1. Log out via profile dropdown\n2. Click browser Back button",
    "TestData": "n/a",
    "Expected": "Protected dashboard pages not accessible; redirected to login",
    "Actual": "Dashboard page still accessible via cached browser history",
    "Status": "Fail",
    "jira": {
      "key": "QA-OHRM-111",
      "severity": "HIGH",
      "priority": "High",
      "summary": "Session Persistence Flaw: Browser Back button re-renders authenticated Dashboard after logout",
      "description": "After explicit user logout, pressing the browser Back button loads the protected Dashboard interface with cached employee widgets instead of redirecting to the login screen.",
      "impact": "Broken Access Control: Users on shared or public workstations risk exposing confidential personnel and attendance data to unauthorized subsequent individuals.",
      "rootCause": "Absence of HTTP Cache-Control headers (no-store, no-cache, must-revalidate) and un-cleared client-side authorization tokens on window popstate.",
      "remediation": "Set strict Cache-Control headers on all authenticated routes and dispatch a clearSession() event that purges LocalStorage and triggers immediate login redirection."
    }
  },
  {
    "ID": "TC-012",
    "Module": "Login",
    "Title": "Login responsive layout on mobile viewport",
    "Type": "UI",
    "Precondition": "User account exists; login page open",
    "Steps": "1. Resize browser to mobile width (375px)\n2. Inspect layout and buttons",
    "TestData": "Viewport 375x812",
    "Expected": "Layout remains usable; fields readable; submit button reachable",
    "Actual": "Layout perfectly responsive; fields and button accessible",
    "Status": "Pass"
  },
  {
    "ID": "TC-013",
    "Module": "Login",
    "Title": "Reset password request",
    "Type": "Positive",
    "Precondition": "User account exists; login page open",
    "Steps": "1. Enter registered username\n2. Click 'Reset Password'",
    "TestData": "Username: Admin",
    "Expected": "Reset link dispatched; success confirmation screen shown",
    "Actual": "Request hangs then fails with HTTP Error 504 Gateway Time-out",
    "Status": "Fail",
    "jira": {
      "key": "QA-OHRM-113",
      "severity": "HIGH",
      "priority": "High",
      "summary": "Server Timeout: Reset Password submission triggers HTTP 504 Gateway Time-out",
      "description": "Submitting a valid password reset request results in an indefinite pending network state followed by an unhandled 504 Gateway Time-out error.",
      "impact": "Critical Workflow Blocker: Legitimate users locked out of accounts cannot self-recover credentials, generating heavy IT support bottlenecks.",
      "rootCause": "Synchronous SMTP mailer execution within the HTTP request thread blocked by an unresponsive gateway or socket timeout exceeding 60s.",
      "remediation": "Decouple email dispatch by offloading mail jobs to an asynchronous background worker queue (Redis / RabbitMQ). Return immediate 200 OK acknowledgment to user."
    }
  },
  {
    "ID": "TC-014",
    "Module": "Dashboard",
    "Title": "Help page navigation icon",
    "Type": "Navigation",
    "Precondition": "User is authenticated and logged in",
    "Steps": "1. Click '?' icon in header\n2. Inspect FAQ list",
    "TestData": "n/a",
    "Expected": "Help & documentation modal shown without errors",
    "Actual": "Help page and FAQ documentation list displayed successfully",
    "Status": "Pass"
  },
  {
    "ID": "TC-015",
    "Module": "Dashboard",
    "Title": "Profile account modal (About dialog)",
    "Type": "Navigation",
    "Precondition": "User is logged in",
    "Steps": "1. Click profile avatar\n2. Click 'About'",
    "TestData": "n/a",
    "Expected": "'About' modal dialog opens with application version info",
    "Actual": "Pop-up 'About' modal rendered with system build specs; no errors",
    "Status": "Pass"
  },
  {
    "ID": "TC-016",
    "Module": "Dashboard",
    "Title": "Profile account support link",
    "Type": "Navigation",
    "Precondition": "User is logged in",
    "Steps": "1. Click profile avatar\n2. Click 'Support'",
    "TestData": "n/a",
    "Expected": "Support documentation page opened without errors",
    "Actual": "Support page rendered successfully with customer service info",
    "Status": "Pass"
  },
  {
    "ID": "TC-017",
    "Module": "Dashboard",
    "Title": "Profile account change password navigation",
    "Type": "Navigation",
    "Precondition": "User is logged in",
    "Steps": "1. Click profile avatar\n2. Click 'Change Password'",
    "TestData": "n/a",
    "Expected": "Change Password form displayed with old and new inputs",
    "Actual": "Change Password view shown with secured credential inputs",
    "Status": "Pass"
  },
  {
    "ID": "TC-018",
    "Module": "Dashboard",
    "Title": "Profile account user logout",
    "Type": "Navigation",
    "Precondition": "User is logged in",
    "Steps": "1. Click profile avatar\n2. Click 'Logout'",
    "TestData": "n/a",
    "Expected": "Session terminated; user redirected to login view",
    "Actual": "Login screen displayed successfully; session cleared",
    "Status": "Pass"
  },
  {
    "ID": "TC-019",
    "Module": "Dashboard",
    "Title": "Upgrade feature icon trigger",
    "Type": "Navigation",
    "Precondition": "User is logged in",
    "Steps": "1. Click 'Upgrade' icon beside profile avatar",
    "TestData": "n/a",
    "Expected": "Feature upgrade plans modal or page displayed",
    "Actual": "Show page upgrade successfully with plan details",
    "Status": "Pass"
  },
  {
    "ID": "TC-020",
    "Module": "Dashboard",
    "Title": "Dashboard grid layout on mobile viewport",
    "Type": "UI",
    "Precondition": "User is logged in",
    "Steps": "1. Resize viewport to mobile dimensions (375px)\n2. Inspect widget cards",
    "TestData": "Viewport 375x812",
    "Expected": "Widgets stack vertically; text legible; all buttons reachable",
    "Actual": "Widgets stack cleanly; interactive controls accessible",
    "Status": "Pass"
  },
  {
    "ID": "TC-021",
    "Module": "Dashboard",
    "Title": "Widget Time at Work navigation",
    "Type": "Navigation",
    "Precondition": "User is logged in",
    "Steps": "1. Click clock icon on 'Time at Work' widget",
    "TestData": "n/a",
    "Expected": "User attendance record page opened",
    "Actual": "Attendance view rendered successfully with check-in history",
    "Status": "Pass"
  },
  {
    "ID": "TC-022",
    "Module": "Dashboard",
    "Title": "Widget My Actions list items navigation",
    "Type": "Navigation",
    "Precondition": "User is logged in",
    "Steps": "1. Click employee item in pending list\n2. Click action icon",
    "TestData": "n/a",
    "Expected": "Corresponding approval or review page loaded",
    "Actual": "Target review page opened without server or routing errors",
    "Status": "Pass"
  },
  {
    "ID": "TC-023",
    "Module": "Dashboard",
    "Title": "Widget Quick Launch all action shortcuts",
    "Type": "Navigation",
    "Precondition": "User is logged in",
    "Steps": "1. Click each available shortcut icon in Quick Launch widget",
    "TestData": "Assign Leave, Timesheets, Apply Leave",
    "Expected": "Each respective target module loads correctly",
    "Actual": "All designated module pages loaded successfully",
    "Status": "Pass"
  },
  {
    "ID": "TC-024",
    "Module": "Dashboard",
    "Title": "Widget Quick Launch active state on back navigation",
    "Type": "UI",
    "Precondition": "User is logged in",
    "Steps": "1. Click an icon in Quick Launch\n2. Click browser Back\n3. Hover over another icon",
    "TestData": "n/a",
    "Expected": "Previously clicked icon reverts to neutral; new hover activates cleanly",
    "Actual": "Previously clicked icon retains active color; UI state desynchronized",
    "Status": "Fail",
    "jira": {
      "key": "QA-OHRM-124",
      "severity": "MEDIUM",
      "priority": "Medium",
      "summary": "UI State Desynchronization: Quick Launch icon active color state persists across browser back navigation",
      "description": "After clicking an action shortcut in Quick Launch and navigating backward via browser history, the active highlight class remains stuck on the former element while hovering others.",
      "impact": "Visual & UX Inconsistency: Misleads users regarding which widget or module is currently in focus.",
      "rootCause": "Active state applied via persistent DOM attribute without reset listener attached to window pageshow / popstate history events.",
      "remediation": "Register popstate and pageshow event listeners to clear residual active/focused styling states upon history restoration."
    }
  },
  {
    "ID": "TC-025",
    "Module": "Dashboard",
    "Title": "Widget Buzz Latest Post interaction",
    "Type": "Navigation",
    "Precondition": "User is logged in",
    "Steps": "1. Click an active post card inside Buzz widget",
    "TestData": "n/a",
    "Expected": "Buzz social feed page loads to selected post thread",
    "Actual": "Buzz feed page opened successfully with comments loaded",
    "Status": "Pass"
  },
  {
    "ID": "TC-026",
    "Module": "Dashboard",
    "Title": "Widget Employees on Leave Today settings popup",
    "Type": "Navigation",
    "Precondition": "User is logged in",
    "Steps": "1. Click settings gear icon on leave widget",
    "TestData": "n/a",
    "Expected": "Employees on Leave Today configuration modal shown",
    "Actual": "Settings modal dialog opened successfully without script errors",
    "Status": "Pass"
  },
  {
    "ID": "TC-027",
    "Module": "Dashboard",
    "Title": "Widget Employee Distribution by Sub Unit tooltip & filter",
    "Type": "UI",
    "Precondition": "User is logged in",
    "Steps": "1. Hover over pie chart slice\n2. Click category in legend",
    "TestData": "Engineering / HR / Sales",
    "Expected": "Data tooltip displayed; slice toggles visibility upon legend click",
    "Actual": "Tooltip displayed; clicked legend item toggles chart slice seamlessly",
    "Status": "Pass"
  },
  {
    "ID": "TC-028",
    "Module": "Dashboard",
    "Title": "Widget Employee Distribution by Location chart interactions",
    "Type": "UI",
    "Precondition": "User is logged in",
    "Steps": "1. Hover over location slice\n2. Click location in legend",
    "TestData": "Headquarters / Regional Office",
    "Expected": "Interactive tooltip displays headcounts; slice filters properly",
    "Actual": "Tooltip appears with accurate data; category toggling behaves as expected",
    "Status": "Pass"
  },
  {
    "ID": "TC-029",
    "Module": "Dashboard",
    "Title": "Hamburger menu toggle expansion",
    "Type": "UI",
    "Precondition": "User is logged in",
    "Steps": "1. Click hamburger icon in navigation header",
    "TestData": "n/a",
    "Expected": "Navigation sidebar drawer expands smoothly",
    "Actual": "Sidebar drawer opens smoothly displaying all primary modules",
    "Status": "Pass"
  },
  {
    "ID": "TC-030",
    "Module": "Hamburger Menu",
    "Title": "Brand logo navigation in sidebar",
    "Type": "Navigation",
    "Precondition": "User is logged in; drawer opened",
    "Steps": "1. Open sidebar drawer\n2. Click OrangeHRM brand logo",
    "TestData": "n/a",
    "Expected": "Navigates to internal dashboard home route (/dashboard)",
    "Actual": "Navigates externally to public marketing website (orangehrm.com)",
    "Status": "Fail",
    "jira": {
      "key": "QA-OHRM-130",
      "severity": "MEDIUM",
      "priority": "Medium",
      "summary": "Unexpected External Redirection: Brand logo links to external corporate marketing site instead of internal Dashboard",
      "description": "Clicking the brand logo inside the authenticated navigation menu directs the user out of the application to the external marketing site.",
      "impact": "Disrupted Workflows: Causes users to unexpectedly lose session context and discard unsaved form progress.",
      "rootCause": "Anchor tag configured with external href='https://www.orangehrm.com' instead of internal application SPA route to='/dashboard'.",
      "remediation": "Replace external anchor target with internal router Link pointing to '/dashboard' to preserve session continuity."
    }
  },
  {
    "ID": "TC-031",
    "Module": "Hamburger Menu",
    "Title": "Close sidebar drawer via 'X' icon",
    "Type": "UI",
    "Precondition": "User is logged in; drawer opened",
    "Steps": "1. Open drawer\n2. Click 'X' close icon",
    "TestData": "n/a",
    "Expected": "Sidebar closes; previous page view restored without reload",
    "Actual": "Sidebar collapses cleanly; previous page remains active",
    "Status": "Pass"
  },
  {
    "ID": "TC-032",
    "Module": "Hamburger Menu",
    "Title": "Module search bar filter functionality",
    "Type": "Usability",
    "Precondition": "User is logged in; drawer opened",
    "Steps": "1. Click search input\n2. Type keyword 'Leave'",
    "TestData": "Search term: 'Leave'",
    "Expected": "List filters instantaneously to matching menu items",
    "Actual": "Search filters menu instantaneously; non-matching items hidden",
    "Status": "Pass"
  }
];

let activeFilter = 'all';
let selectedTestId = 'TC-003'; // Default to a defect to showcase Jira integration

function initQAWorkbench() {
  renderTestCaseList(activeFilter);
  selectTestCase(selectedTestId);
}

function switchDemoTab(tabId, btnEl) {
  document.querySelectorAll('.demo-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.demo-panel').forEach(panel => panel.classList.remove('active'));

  btnEl.classList.add('active');
  const panel = document.getElementById(tabId);
  if (panel) {
    panel.classList.add('active');
  }
}

function filterTestCases(filterType, btnEl) {
  activeFilter = filterType;
  document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
  btnEl.classList.add('active');
  renderTestCaseList(filterType);
}

function renderTestCaseList(filter) {
  const container = document.getElementById('test-case-rows');
  if (!container) return;

  let filtered = testCasesData;
  if (filter === 'pass') {
    filtered = testCasesData.filter(t => t.Status === 'Pass');
  } else if (filter === 'fail') {
    filtered = testCasesData.filter(t => t.Status === 'Fail');
  } else if (filter === 'security') {
    filtered = testCasesData.filter(t => t.Type === 'Negative' || t.Title.toLowerCase().includes('sql') || t.Title.toLowerCase().includes('logout'));
  } else if (filter === 'boundary') {
    filtered = testCasesData.filter(t => t.Type === 'Boundary' || t.Type === 'UI');
  } else if (filter === 'navigation') {
    filtered = testCasesData.filter(t => t.Type === 'Navigation' || t.Type === 'Usability');
  }

  container.innerHTML = filtered.map(t => {
    const isPass = t.Status === 'Pass';
    const isActive = t.ID === selectedTestId;
    return `
      <div class="test-row-item ${isActive ? 'active' : ''}" onclick="selectTestCase('${t.ID}')">
        <div class="test-row-left">
          <div class="test-id-type">
            <span class="test-id">${t.ID}</span>
            <span class="test-type-tag">${t.Type}</span>
            <span class="text-dim" style="font-size:0.7rem">• ${t.Module}</span>
          </div>
          <span class="test-title-text">${t.Title}</span>
        </div>
        <span class="status-badge ${isPass ? 'status-pass' : 'status-fail'}">
          <i class="fa-solid ${isPass ? 'fa-check' : 'fa-triangle-exclamation'}"></i>
          ${t.Status}
        </span>
      </div>
    `;
  }).join('');
}

function selectTestCase(id) {
  selectedTestId = id;

  // Highlight selected row
  document.querySelectorAll('.test-row-item').forEach(row => {
    row.classList.remove('active');
  });

  const test = testCasesData.find(t => t.ID === id);
  if (!test) return;

  // Update Detail Panel
  document.getElementById('det-id').textContent = test.ID;
  document.getElementById('det-title').textContent = test.Title;
  document.getElementById('det-module').textContent = test.Module;
  document.getElementById('det-type').textContent = test.Type;
  document.getElementById('det-precon').textContent = test.Precondition;
  document.getElementById('det-testdata').textContent = test.TestData;
  document.getElementById('det-steps').textContent = test.Steps;
  document.getElementById('det-expected').textContent = test.Expected;

  const actualEl = document.getElementById('det-actual');
  actualEl.textContent = test.Actual;

  const statusBadge = document.getElementById('det-status-badge');
  const isPass = test.Status === 'Pass';
  statusBadge.className = `status-badge ${isPass ? 'status-pass' : 'status-fail'}`;
  statusBadge.innerHTML = `<i class="fa-solid ${isPass ? 'fa-check' : 'fa-triangle-exclamation'}"></i> ${test.Status}`;

  const actualBox = document.getElementById('det-actual-box');
  if (isPass) {
    actualBox.className = 'res-box res-box-actual res-pass';
  } else {
    actualBox.className = 'res-box res-box-actual';
  }

  // Jira Ticket Injection if defect
  const jiraContainer = document.getElementById('jira-ticket-container');
  if (test.jira) {
    const j = test.jira;
    jiraContainer.style.display = 'block';
    jiraContainer.innerHTML = `
      <div class="jira-ticket-card">
        <div class="jira-ticket-header">
          <div class="jira-key-badge">
            <i class="fa-brands fa-jira text-blue"></i>
            <span>${j.key}</span>
            <span class="tag tag-emerald" style="font-size:0.7rem">Practice Bug Report</span>
          </div>
          <span class="jira-severity-badge">
            <i class="fa-solid fa-fire"></i> ${j.severity}
          </span>
        </div>
        <h4 class="jira-summary">${j.summary}</h4>
        <div class="jira-meta-row">
          <span><strong>Priority:</strong> ${j.priority}</span>
          <span><strong>Component:</strong> ${test.Module}</span>
          <span><strong>Reporter:</strong> Qualifia</span>
          <span><strong>Status:</strong> <span class="text-rose">Open</span></span>
        </div>
        
        <div class="jira-callout">
          <h6><i class="fa-solid fa-triangle-exclamation"></i> Defect Description</h6>
          <p>${j.description}</p>
        </div>

        <div class="jira-callout">
          <h6><i class="fa-solid fa-microscope"></i> Suspected Cause (hypothesis)</h6>
          <p>${j.rootCause}</p>
        </div>

        <div class="jira-callout remedy">
          <h6><i class="fa-solid fa-shield-halved"></i> Suggested Fix</h6>
          <p>${j.remediation}</p>
        </div>
      </div>
    `;
  } else {
    jiraContainer.style.display = 'block';
    jiraContainer.innerHTML = `
      <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-lg); padding: 1.5rem; text-align: center;">
        <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(16, 185, 129, 0.15); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin: 0 auto 0.8rem auto;">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <h5 style="color: var(--primary); font-size: 1.05rem; margin-bottom: 0.3rem;">Test Passed</h5>
        <p style="font-size: 0.86rem; color: var(--text-muted); max-width: 420px; margin: 0 auto;">
          The actual result matched the expected result.
        </p>
      </div>
    `;
  }
}

/* --------------------------------------------------------------------------
   7. DATACOM JOB SIMULATION ENGINE (TAB 2)
   -------------------------------------------------------------------------- */
const datacomModes = {
  defect: {
    title: "1. The Issue",
    desc: "One of the issues in the Cinema Finder web application from the Datacom job simulation.",
    content: `
      <div style="background: rgba(0,0,0,0.3); border-radius: var(--radius-md); padding: 1.2rem; border: 1px solid var(--border-color);">
        <h5 style="font-size: 0.9rem; color: var(--rose); margin-bottom: 0.5rem;">
          <i class="fa-solid fa-bug"></i> Issue: Map icon did not show cinemas in the area
        </h5>
        <p style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.5;">
          Expected behavior: when the map icon is clicked, the cinemas located in that area should appear.
        </p>
      </div>
    `
  },
  code: {
    title: "2. Root Cause",
    desc: "What I found when reviewing the Cinema Finder code.",
    content: `
      <div style="background: rgba(244, 63, 94, 0.08); border-left: 3px solid var(--rose); padding: 1rem; border-radius: var(--radius-xs);">
        <h6 style="color: var(--rose); font-size: 0.82rem; margin-bottom: 0.3rem;">Root Cause</h6>
        <p style="font-size: 0.84rem; color: #cbd5e1; line-height: 1.5;">
          I identified the root cause of this issue in the code. <!-- Write 1-2 sentences in your own words: which part of the code was wrong and why. -->
        </p>
      </div>
    `
  },
  remediation: {
    title: "3. Fix & Re-test",
    desc: "The fix I applied and how I checked it.",
    content: `
      <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid var(--primary); padding: 1rem; border-radius: var(--radius-xs);">
        <p style="font-size: 0.84rem; color: #cbd5e1; line-height: 1.5;">
          1. Implemented a fix so that clicking the map icon shows the cinemas located in that area.<br>
          2. Re-tested by clicking the map icon and checking that the cinemas in that area appeared.
        </p>
      </div>
    `
  }
};

function initDatacomViewer() {
  setDatacomMode('defect');
}

function setDatacomMode(mode) {
  const data = datacomModes[mode];
  if (!data) return;

  document.querySelectorAll('#datacom-switchers .sub-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-datacom-${mode}`);
  if (activeBtn) activeBtn.classList.add('active');

  document.getElementById('datacom-mode-title').textContent = data.title;
  document.getElementById('datacom-mode-desc').textContent = data.desc;
  document.getElementById('datacom-dynamic-content').innerHTML = data.content;
}

/* --------------------------------------------------------------------------
   8. SIMRS DATA-MAPPING INTEGRITY ENGINE (TAB 3)
   -------------------------------------------------------------------------- */
const simrsMappingData = {
  surgical: {
    formName: "Surgical Safety Checklist",
    template: "Surgical safety checklist print template (Laravel Blade)",
    bug: "Some database field ID references in the template pointed to the wrong fields, so patient data did not display correctly.",
    fix: "Corrected the field ID references so the form shows the right data.",
    impact: "The printed form displays accurate patient data."
  },
  discharge: {
    formName: "Discharge Planning",
    template: "Discharge planning print template (Laravel Blade)",
    bug: "Some database field ID references in the template pointed to the wrong fields, so patient data did not display correctly.",
    fix: "Corrected the field ID references so the form shows the right data.",
    impact: "The printed form displays accurate patient data."
  },
  maternity: {
    formName: "Maternity Monitoring Chart",
    template: "Maternity monitoring chart print template (Laravel Blade)",
    bug: "Some database field ID references in the template pointed to the wrong fields, so patient data did not display correctly.",
    fix: "Corrected the field ID references so the form shows the right data.",
    impact: "The printed form displays accurate patient data."
  },
  medication: {
    formName: "Medication Instructions",
    template: "Medication instructions print template (Laravel Blade)",
    bug: "Some database field ID references in the template pointed to the wrong fields, so patient data did not display correctly.",
    fix: "Corrected the field ID references so the form shows the right data.",
    impact: "The printed form displays accurate patient data."
  }
};

function initSIMRSMapping() {
  setSIMRSMode('surgical');
}

function setSIMRSMode(key) {
  const data = simrsMappingData[key];
  if (!data) return;

  document.querySelectorAll('.map-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-map-${key}`);
  if (activeBtn) activeBtn.classList.add('active');

  document.getElementById('simrs-form-name').textContent = data.formName;
  document.getElementById('simrs-template-name').textContent = data.template;
  document.getElementById('simrs-bug-desc').innerHTML = data.bug;
  document.getElementById('simrs-fix-desc').innerHTML = data.fix;
  document.getElementById('simrs-impact-desc').textContent = data.impact;
}

/* --------------------------------------------------------------------------
   9. CERTIFICATIONS MODAL SYSTEM
   -------------------------------------------------------------------------- */
const certData = {
  jira: {
    title: "Jira for Quality Assurance Testing",
    issuer: "Coursera",
    date: "Completed October 2026",
    code: "",
    overview: "Course on using Jira for QA testing, including tracking bugs and test execution. Completed without a paid certificate.",
    skills: ["Jira", "Bug Tracking", "Test Execution"],
    modules: []
  },
  security: {
    title: "CompTIA Security+ Preparation Course",
    issuer: "Be Logix",
    date: "Completed August 2024",
    code: "6419/CT-1503/2024",
    overview: "Preparation course covering cybersecurity fundamentals. Course completion certificate only; the CompTIA Security+ exam was not taken.",
    skills: ["Security Fundamentals"],
    image: "assets/images/certificates/belogix_security.jpg",
    modules: []
  },
  cpp: {
    title: "Introduction to Programming with C++",
    issuer: "Be Logix",
    date: "Completed July 2023",
    code: "",
    overview: "Introductory course on C++ programming fundamentals.",
    skills: ["C++", "Programming Basics"],
    modules: []
  }
};

function openCertModal(key) {
  const data = certData[key];
  if (!data) return;

  const modal = document.getElementById('cert-modal');
  const header = document.getElementById('cert-modal-header');
  const body = document.getElementById('cert-modal-body');
  const footer = document.getElementById('cert-modal-footer');

  if (!modal || !header || !body || !footer) return;

  header.innerHTML = `
    <div>
      <span class="cert-issuer-badge" style="margin-bottom:0.5rem;"><i class="fa-solid fa-certificate"></i> ${key === 'jira' ? 'Course' : 'Certificate'}</span>
      <h3 style="font-size: 1.5rem; margin-top:0.4rem;">${data.title}</h3>
      <div style="display:flex; gap:1.2rem; margin-top:0.6rem; font-size:0.85rem; color:var(--text-dim); flex-wrap:wrap;">
        <span><i class="fa-solid fa-building text-primary"></i> ${data.issuer}</span>
        <span><i class="fa-solid fa-calendar text-primary"></i> ${data.date}</span>
        ${data.code ? `<span><i class="fa-solid fa-id-card text-primary"></i> ID: <strong class="mono text-main">${data.code}</strong></span>` : ''}
      </div>
    </div>
  `;

  body.innerHTML = `
    ${data.image ? `
      <div style="margin-bottom: 1.5rem;">
        <img src="${data.image}" alt="${data.title} certificate"
          style="width:100%; border-radius: var(--radius-md); border: 1px solid var(--border-color); cursor: zoom-in;"
          onclick="openLightbox('${data.image}', '${data.title}')">
        <span style="display:block; margin-top:0.4rem; font-size:0.75rem; color: var(--text-dim);">Click the image to enlarge</span>
      </div>
    ` : ''}

    <div style="margin-bottom: 1.5rem;">
      <h5 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--text-main);">Credential Overview</h5>
      <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">${data.overview}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h5 style="font-size: 0.95rem; margin-bottom: 0.7rem; color: var(--text-main);">Key Competencies & Core Skills</h5>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${data.skills.map(s => `<span class="tag tag-emerald">${s}</span>`).join('')}
      </div>
    </div>

    ${data.modules.length ? `
    <div>
      <h5 style="font-size: 0.95rem; margin-bottom: 0.6rem; color: var(--text-main);">Course Modules</h5>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
        ${data.modules.map(m => `
          <li style="font-size: 0.88rem; color: #cbd5e1; display: flex; align-items: flex-start; gap: 0.6rem;">
            <i class="fa-solid fa-check text-primary" style="margin-top: 0.25rem;"></i>
            <span>${m}</span>
          </li>
        `).join('')}
      </ul>
    </div>
    ` : ''}
  `;

  footer.innerHTML = `
    <button onclick="closeCertModalDirect()" class="btn btn-secondary btn-sm">Close</button>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertModal(e) {
  if (!e || e.target.id === 'cert-modal') {
    closeCertModalDirect();
  }
}

function closeCertModalDirect() {
  const modal = document.getElementById('cert-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/* --------------------------------------------------------------------------
   10. CASE STUDY DETAIL MODAL SYSTEM
   -------------------------------------------------------------------------- */
const caseStudiesData = {
  hcm: {
    title: "Human Capital Management (HCM) Web Application",
    company: "Yakes Telkom Bandung",
    tech: ["Laravel (MVC)", "PHP", "MySQL", "Blade Templates", "Functional Testing"],
    content: `
      <div style="margin-bottom: 1.5rem;">
        <h5 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--primary);">Overview</h5>
        <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">
          Developed a Human Capital Management web application with Laravel (PHP) following the MVC architecture, covering the Talent Management, Recruitment Management, and Development Journey Management (DJM) modules.
        </p>
      </div>
      <div>
        <h5 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--primary);">Testing & Debugging</h5>
        <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">
          Performed functional testing and debugging to ensure the features met the functional requirements before deployment.
        </p>
      </div>
    `
  },
  simrs: {
    title: "SIMRS Form Templates & User Manuals",
    company: "PT. Jasa Medika Transmedic",
    tech: ["Laravel Blade", "HTML / CSS", "Technical Writing", "Data Mapping"],
    content: `
      <div>
        <h5 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--secondary);">What I Did</h5>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
          <li style="font-size: 0.9rem; color: #cbd5e1;">• Developed 8 printable PDF form templates using Laravel Blade, HTML, and CSS (discharge planning, medication instructions, midwifery care, surgical safety checklist, nutrition screening, maternity monitoring chart).</li>
          <li style="font-size: 0.9rem; color: #cbd5e1;">• Debugged data-mapping errors by correcting database field ID references so forms displayed accurate patient data.</li>
          <li style="font-size: 0.9rem; color: #cbd5e1;">• Authored 5 user manuals with step-by-step instructions and annotated screenshots.</li>
        </ul>
      </div>
    `
  },
  research: {
    title: "Entity Extraction in Scientific Articles in the Field of AI",
    company: "Telkom University",
    tech: ["NLP", "Artificial Intelligence", "Research"],
    content: `
      <div>
        <h5 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--cyan);">Overview</h5>
        <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">
          Research paper for the 5th International Conference on Intelligent Cybernetics Technology & Applications 2025 (ICICyTA 2025), on entity extraction in scientific articles in the field of AI.
        </p>
      </div>
    `
  }
};


function openCaseStudyModal(key) {
  const data = caseStudiesData[key];
  if (!data) return;

  const modal = document.getElementById('casestudy-modal');
  const header = document.getElementById('casestudy-modal-header');
  const body = document.getElementById('casestudy-modal-body');

  if (!modal || !header || !body) return;

  header.innerHTML = `
    <div>
      <span class="tag tag-emerald" style="margin-bottom:0.4rem; font-size:0.75rem;"><i class="fa-solid fa-folder-open"></i> Project Deep Dive</span>
      <h3 style="font-size: 1.45rem; margin-top:0.3rem;">${data.title}</h3>
      <div style="display:flex; gap:1rem; margin-top:0.4rem; font-size:0.85rem; color:var(--text-dim); flex-wrap:wrap;">
        <span><i class="fa-solid fa-building text-primary"></i> ${data.company}</span>
      </div>
    </div>
  `;

  body.innerHTML = `
    ${data.content}
    <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
      <h6 style="font-size: 0.8rem; color: var(--text-dim); text-transform: uppercase; margin-bottom: 0.6rem;">Technologies & Methodologies</h6>
      <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
        ${data.tech.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudyModal(e) {
  if (!e || e.target.id === 'casestudy-modal') {
    closeCaseStudyModalDirect();
  }
}

function closeCaseStudyModalDirect() {
  const modal = document.getElementById('casestudy-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/* --------------------------------------------------------------------------
   11. LIGHTBOX SYSTEM FOR DATACOM SCREENSHOT
   -------------------------------------------------------------------------- */
function openLightbox(src, caption) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');

  if (!modal || !img) return;

  img.src = src;
  if (cap) cap.textContent = caption || 'Datacom Job Simulation - Bug Investigation & DevTools Telemetry';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (!e || e.target.id === 'lightbox-modal') {
    closeLightboxDirect();
  }
}

function closeLightboxDirect() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Global escape key listener
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCertModalDirect();
    closeCaseStudyModalDirect();
    closeLightboxDirect();
  }
});

/* --------------------------------------------------------------------------
   12. CONTACT FORM SUBMISSION & WHATSAPP GENERATOR
   -------------------------------------------------------------------------- */
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('form-name').value.trim();
  const email = document.getElementById('form-email').value.trim();
  const subject = document.getElementById('form-subject').value.trim();
  const message = document.getElementById('form-message').value.trim();

  if (!name || !email || !message) {
    showToast('Please complete all required fields.', 'warning');
    return;
  }

  showToast(`Thank you, ${name}! Redirecting to WhatsApp with your inquiry...`);

  const waText = encodeURIComponent(
    `Hello Qualifia Nayyara Ammarani,\n\nI reviewed your QA internship portfolio website.\n\nFrom: ${name} (${email})\nSubject: ${subject || 'QA Internship Opportunity'}\n\nMessage: ${message}`
  );

  setTimeout(() => {
    window.open(`https://wa.me/6285795848375?text=${waText}`, '_blank');
  }, 1200);

  document.getElementById('contact-form').reset();
}

function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  const icon = type === 'warning' ? 'fa-triangle-exclamation text-amber' : 'fa-circle-check text-primary';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${msg}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 350);
  }, 4200);
}
