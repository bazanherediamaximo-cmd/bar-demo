document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.navigate-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const current = document.querySelector('.view-container.active');
            const target = document.getElementById(targetId);

            if(!target || target === current) return;

            if(targetId === 'menu-view') {
                current.classList.replace('active', 'prev');
                target.classList.replace('next', 'active');
                setTimeout(() => { target.scrollTop = 0; }, 100);
            } else {
                current.classList.replace('active', 'next');
                target.classList.replace('prev', 'active');
            }
        });
    });
});