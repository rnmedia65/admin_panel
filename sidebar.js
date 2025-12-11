const sidebarHTML = `
<div class="mobile-header">
    <h1>Admin Panel</h1>
    <button class="menu-toggle" onclick="toggleSidebar()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    </button>
</div>

<div class="overlay" onclick="toggleSidebar()"></div>

<div class="sidebar">
    <div class="sidebar-header">
        <h2>Admin Panel</h2>
        <button class="close-sidebar" onclick="toggleSidebar()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    <div class="sidebar-menu">
        <a href="index.html">
            <svg viewBox="0 0 24 24" fill="#000" stroke="#000" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Dashboard
        </a>
        <a href="channel.html">
            <svg viewBox="0 0 24 24" fill="#000" stroke="#000" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Channels
        </a>
        <a href="apps.html">
            <svg viewBox="0 0 24 24" fill="#000" stroke="#000" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="9" x2="15" y2="9"></line>
                <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
            Apps
        </a>
        <a href="data.html">
            <svg viewBox="0 0 24 24" fill="#000" stroke="#000" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            Data Entry
        </a>
        <a href="withdraw.html">
            <svg viewBox="0 0 24 24" fill="#000" stroke="#000" stroke-width="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
            Withdrawals
        </a>
        <a href="withdraw_history.html">
            <svg viewBox="0 0 24 24" fill="#000" stroke="#000" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            History
        </a>
        <a href="block_withdraw.html">
            <svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2">
                <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"></path>
                <line x1="9" y1="9" x2="15" y2="15"></line>
                <line x1="15" y1="9" x2="9" y2="15"></line>
            </svg>
            Block Withdraw
        </a>
        <a href="#" onclick="logout()">
            <svg viewBox="0 0 24 24" fill="#000" stroke="#000" stroke-width="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
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