window.addEventListener('DOMContentLoaded',
    () => {
        const accordeons = document.querySelectorAll('.accordeon__head');
        // console.log(accordeons);
        accordeons.forEach(accordeon => {
            accordeon.addEventListener('click', event => {
                const isActive = accordeon.parentElement.classList.contains('active');
                const active = document.querySelector('.accordeon.active');
                active.classList.remove('active');
                accordeon.parentElement.classList.add('active')
            })
        })
    });
