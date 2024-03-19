const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})

// Animation Initialization

AOS.init();


// Navbar sticky 

const selectHeader = document.querySelector('#header-section');
if (selectHeader) {
  document.addEventListener('scroll', () => {
    window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
  });
}


// Custom toggler button










// scroll to top button

const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }



  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
}


















// body
// {background-color: #000}
// .wrapper{display: 
//   flex;justify-content: 
//   center;align-items: 
//   center;height: 100vh}
//   .pulse{width: 70px;
//     height: 70px;
//     background-color:red;
//     border-radius: 50%;position:relative;
//     animation: animate 3s linear infinite}
//      .pulse i{position: relative;
//       display: flex;justify-content: 
//       center;align-items: 
//       center;font-size: 30px;color: #fff;height: 100%;cursor:
//        pointer}
//        @keyframes animate{0%{box-shadow: 0 0 0 0 rgb(255, 109, 74, 0.7) , 0 0 0 0 rgb(255, 109, 74, 0.7)}40%{box-shadow: 0 0 0 50px rgb(255, 109, 74, 0) , 0 0 0 0 rgb(255, 109, 74, 0.7)}80%{box-shadow: 0 0 0 50px rgb(255, 109, 74, 0) , 0 0 0 30px rgb(255, 109, 74, 0)}100%{box-shadow: 0 0 0 0 rgb(255, 109, 74, 0) , 0 0 0 30px rgb(255, 109, 74, 0)}}





