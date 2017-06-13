// dont forget to require your files from modules.

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';



var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%"); // for feature items
new RevealOnScroll($(".testimonials"), "60%"); // for testimonials section

