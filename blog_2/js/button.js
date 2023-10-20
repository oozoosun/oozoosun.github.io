const elemFTCard = document.querySelectorAll('.features .card');

elemFTCard.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('in');
        const span = document.createElement('span');
        card.appendChild(span);

        card.addEventListener('mousemove', (e) => {
            const xPos = e.clientX - card.getBoundingClientRect().left;
            const yPos = e.clientY - card.getBoundingClientRect().top;
            span.style.transform = `translate(${xPos}px, ${yPos}px) scale(3)`;
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('in');
            const spanToRemove = card.querySelector('span');
            if (spanToRemove) {
                card.removeChild(spanToRemove);
            }
        });
    });
});