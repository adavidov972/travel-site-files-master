import throttle from "lodash/throttle"

class RevealOnScroll {
  constructor(items, revealPrecentage) {
    this.itemsToReveal = items
    this.revealPrecentage = revealPrecentage

    this.hideInitially()
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
    this.events()
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle)
  }

  calcCaller() {
    this.itemsToReveal.forEach((el) => this.calculateScroll(el))
  }

  hideInitially() {
    this.itemsToReveal.forEach((el) => {
      el.isRevealed = false
      el.classList.add("reveal-item")
    })
  }

  calculateScroll(el) {
    if (!el.isRevealed) {
      let presentage = (el.getBoundingClientRect().y / window.innerHeight) * 100
      if (presentage < this.revealPrecentage) {
        el.isRevealed = true
        el.classList.add("reveal-item--is-visible")
      }
    }

    if (this.itemsToReveal[this.itemsToReveal.length - 1].isRevealed == true) {
      window.removeEventListener("scroll", this.scrollThrottle)
    }
  }
}

export default RevealOnScroll
