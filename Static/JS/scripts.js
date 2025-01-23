// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of showing a modal
function showModal(message) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.padding = '20px';
    modal.style.backgroundColor = '#ffff00';
    modal.style.color = '#000';
    modal.style.border = '2px solid #000';
    modal.style.zIndex = '1000';
    modal.innerHTML = `<p>${message}</p><button id="closeModal">Close</button>`;
    document.body.appendChild(modal);

    document.getElementById('closeModal').addEventListener('click', () => {
        modal.remove();
    });
}

// Example usage: Show a welcome message on page load
document.addEventListener('DOMContentLoaded', () => {
    showModal('Welcome to Disciplined Trade!');
});
