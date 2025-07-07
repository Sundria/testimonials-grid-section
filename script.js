document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault();
    const modal = document.querySelector('.clicked-card');
    const modalContent = document.querySelector('.aparecer-modal');
    const cards = document.querySelectorAll('.cards .card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardHtml = card.innerHTML;

            modalContent.innerHTML = `
            <div class="card ${card.classList[1]}">
            <img class= "fechar-comment" src="./images/close-svgrepo-com.svg" alt="">
                    ${cardHtml}
            </div>`;

            modal.style.display = 'block';
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('fechar-comment')) {
            modal.style.display = 'none';
            modalContent.innerHTML = '';
        }
    });
});