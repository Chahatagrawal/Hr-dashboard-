console.log("Script running...");

document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger_logo').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo'); 
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    } else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 300);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdownmenu');

    dropdownToggle.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});
