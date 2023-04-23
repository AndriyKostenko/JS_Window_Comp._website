const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeCLickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector),
                windows = document.querySelectorAll('[data-modal]'), // getting all modals by data attr.
                scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (event) => {
                //check if its button, ref or smth else
                if (event.target) {
                    event.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                //showing modal window
                modal.style.display = "block";
                //freezing modal window
                document.body.style.overflow = 'hidden';

                document.body.style.marginRight = `${scroll}px`; // fixing jumping of scroll after opening of modal window
                
    
            });
        })

        close.addEventListener('click', () => {
            // for closing all modals if they are multiplied
            windows.forEach(item => {
                item.style.display = 'none';
            });
            // hide the modal
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`; // fixing jumping of scroll after opening of modal window
           

        });

        // checking if clicking outside of modal window 
        modal.addEventListener('click', (event) => {
            
            if (event.target === modal && closeCLickOverlay) {
                // for closing all modals if they are multiplied
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`; // fixing jumping of scroll after opening of modal window
            }
        })
    }
    

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }

    // fixing bug with jumping of scroll after calling modal window
    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;

        }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 60000)
};

export default modals;