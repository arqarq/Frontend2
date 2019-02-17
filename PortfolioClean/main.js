window.addEventListener('DOMContentLoaded',
    () => {
        const accordeons = document.querySelectorAll('.accordeon__head');
        // console.log(accordeons);
        accordeons.forEach(accordeon => {
            accordeon.addEventListener('click', () => {
                // const isActive = accordeon.parentElement.classList.contains('active');
                const active = document.querySelector('.accordeon.active');
                accordeon.parentElement.classList.toggle('active');
                if (active) {
                    active.classList.remove('active')
                }
                // active.classList.remove('active');
            })
        })
    });
