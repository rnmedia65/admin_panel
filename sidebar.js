const lucideScript = document.createElement('script');
lucideScript.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.js';
lucideScript.onload = function () {
    document.querySelectorAll('.sidebar-menu a i[data-lucide], .mobile-header i[data-lucide], .sidebar-header i[data-lucide]').forEach(el => {
        lucide.createIcons({ el });
    });
    lucide.createIcons();
};
document.head.appendChild(lucideScript);

const sidebarHTML = `
<div class="mobile-header">
    <h1>Admin Panel</h1>
    <button class="menu-toggle" onclick="toggleSidebar()">
        <i data-lucide="menu" style="width:22px;height:22px;stroke:#1a1a1a;"></i>
    </button>
</div>

<div class="overlay" onclick="toggleSidebar()"></div>

<div class="sidebar">
    <div class="sidebar-header">
        <h2>Admin Panel</h2>
        <button class="close-sidebar" onclick="toggleSidebar()">
            <i data-lucide="x" style="width:20px;height:20px;stroke:#1a1a1a;"></i>
        </button>
    </div>
    <div class="sidebar-menu">
        <a href="index.html">
            <i data-lucide="layout-dashboard"></i>
            Dashboard
        </a>
        <a href="channel.html">
            <i data-lucide="tv-2"></i>
            Channels
        </a>
        <a href="apps.html">
            <i data-lucide="grid-2x2"></i>
            Apps
        </a>
        <a href="data.html">
            <i data-lucide="database"></i>
            Data Entry
        </a>
        <a href="offer_links.html">
            <i data-lucide="link-2"></i>
            Offer Links
        </a>
        <a href="offer_rank.html">
            <i data-lucide="arrow-up-narrow-wide"></i>
            Offer Rank
        </a>
        <a href="withdraw.html">
            <i data-lucide="banknote"></i>
            Withdrawals
        </a>
        <a href="withdraw_history.html">
            <i data-lucide="clock-3"></i>
            History
        </a>
        <a href="block_withdraw.html">
            <i data-lucide="shield-ban"></i>
            Block Withdraw
        </a>
        <a href="#" onclick="logout()">
            <i data-lucide="log-out"></i>
            Logout
        </a>
    </div>
</div>
`;

document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('admin_active');
        location.href = 'login.html';
    }
}

const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('.sidebar-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
