import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';


//scripts will start only when DOM is fully ready
window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click')
})
