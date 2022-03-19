const html = document.querySelector('html')
const checkbox =  document.querySelector('#switch')
const img = document.querySelector('.about_image')

checkbox.addEventListener('change', () => {
   html.classList.toggle('dark_mode')
   if(html.classList[0] == 'dark_mode'){
      img.style.display = "none"
   }else {
      img.style.display = "block"

   }
})
