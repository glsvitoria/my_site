class MobileNavbar {
   constructor(mobileMenu, navList, navLinks, sections, nav) {
      this.mobileMenu = document.querySelector(mobileMenu)
      this.navList = document.querySelector(navList)
      this.navLinks = document.querySelectorAll(navLinks)
      this.activeClass = "active"
      this.sections = document.querySelectorAll(sections)
      this.nav = document.querySelector(nav)

      this.handleClick = this.handleClick.bind(this)
   }

   animateLinks() {
      this.navLinks.forEach((link, index) => {

         link.style.animation
            ? (link.style.animation = '')
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 + 0.3}s`)
      })
   }

   handleClick() {
      this.navList.classList.toggle(this.activeClass)
      this.mobileMenu.classList.toggle(this.activeClass)
      this.animateLinks()

      this.nav.classList.toggle('black')
      const lines = document.querySelectorAll('.mobile-menu div')
      for(let line of lines){
         line.classList.toggle('white')
      }

      
   }

   goToSection() {
      for(let link of this.sections){
         link.addEventListener('click', this.handleClick)
      }
   }

   addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick)
   }

   init() {
      if(this.mobileMenu){
         this.addClickEvent()
         this.goToSection()
      }

      return this
   }
}

const mobileNavbar = new MobileNavbar (
   ".mobile-menu",
   ".nav_list",
   ".nav_list li",
   ".nav_list__ancora",
   ".nav.container"
)

mobileNavbar.init()