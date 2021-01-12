const TodoUI = (() => {
    const createCard = () => {
        const accordion = document.querySelector('.accordion');
        const card = document.createElement('div');
        card.className = 'card shadow mb-4';
        accordion.appendChild(card);
        return card;
    }

    const createCardHeader = () => {
        const cardHeader = document.createElement('div');
        const headingTag = document.createElement('h2');
        const checkboxDiv = document.createElement('div');
        const checkbox = document.createElement('input');
        const accordionBtn = document.createElement('button');

        cardHeader.className = 'card-header shadow pt-0 medium d-flex justify-content-between align-items-baseline';
        headingTag.className = 'mb-0 d-flex align-items-baseline';
        checkboxDiv.className = 'form-check mr-1';
        checkbox.className = 'form-check-input position-static task-complete-checkbox';
        accordionBtn.className = 'btn btn-block text-left px-0 w-auto task-title-btn';

        checkbox.setAttribute = ('type', 'checkbox');
        checkbox.setAttribute = ('aria-label', 'checkbox');
        cardHeader.id = 'headingOne';
        accordionBtn.setAttribute('type', 'button');
        accordionBtn.setAttribute('data-toggle', 'collapse');
        accordionBtn.setAttribute('data-target', 'collapseOne');
        accordionBtn.setAttribute('aria-expanded', 'true');
        accordionBtn.setAttribute('aria-controls', 'collapseOne');

        checkboxDiv.appendChild(checkbox);
        headingTag.appendChild(checkboxDiv);
        headingTag.appendChild(accordionBtn);


    }
})();