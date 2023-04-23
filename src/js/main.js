import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';


//scripts will start only when DOM is fully ready
window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    // state of modal where user does inputs and checks
    let modalState = {}; // always transforming due to changeModalState function
    let deadline = '2023-12-01';

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click'); // only with tags div
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block') // only with tags 'img'
    forms(modalState); //sending current state 
    timer('.container1', deadline);
})
