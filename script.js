// Filtrlarni qo'llash
const filterButtons = document.querySelectorAll('.filter-btn');
const sections = document.querySelectorAll('.menu-section');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        sections.forEach(section => {
            if (filter === 'all' || section.classList.contains(filter)) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Modal oynani ochish
const menuItems = document.querySelectorAll('.menu-item');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close');
const itemDescription = document.getElementById('item-description');
const modalImage = document.getElementById('modal-image');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const description = item.getAttribute('data-description');
        const image = item.getAttribute('data-image');
        itemDescription.textContent = description;
        modalImage.src = image;
        modal.style.display = 'block';
        overlay.style.display = 'block';
        
        // Modal animatsiyasi
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });
});

// Modal oynani yopish
closeModalButton.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }, 300); // Animatsiya vaqti bilan sinxronlash
});

overlay.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }, 300);
});
