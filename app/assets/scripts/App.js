import "../styles/styles.css"
import Menu from "./modules/Menu"
import RevealOnScroll from "./modules/RevealOnScroll"
import StickyHeader from "./modules/StickyHeader"

if (module.hot) {
  module.hot.accept()
}

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
new StickyHeader()
new Menu()
