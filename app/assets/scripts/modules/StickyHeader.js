import throttle from "lodash/throttle"

class StickyHeader {
  constructor() {
    this.header = document.querySelector(".site-header")
    this.scrollThrottle = throttle(this.calculateScroll.bind(this), 200)

    this.events()
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle)
  }

  calculateScroll() {
    if (window.scrollY > 60) {
      this.header.classList.add("site-header--dark")
    } else {
      this.header.classList.remove("site-header--dark")
    }
  }
}

export default StickyHeader
