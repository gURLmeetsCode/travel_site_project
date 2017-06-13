// dont forget to require your files from modules.

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import $ from 'jquery';



var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%"); // for feature items
new RevealOnScroll($(".testimonials"), "60%"); // for testimonials section
var stickyHeader = new StickyHeader();
var modal = new Modal();

