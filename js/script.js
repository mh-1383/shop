
$(document).ready(function () {
    
    $("#hamberbtn").click(function () {
        
            $("#navigation").animate({"width":"show"},500);

            $("#black").fadeIn();


    })

    $("#black").click(function () {
        
            $("#navigation").animate({"width":"hide"},500);

            $("#black").fadeOut();


    })

      
});

$(document).ready(function() {
  $('#switchToSignIn').on('click', function() {
      $('#signUpContainer').addClass('hidden');
      $('#signInContainer').removeClass('hidden');
  });

  $('#switchToSignUp').on('click', function() {
      $('#signInContainer').addClass('hidden');
      $('#signUpContainer').removeClass('hidden');
  });
});


document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('container');
        
        // Array of data to create multiple elements
        const items2 = [
          { src: './image/men-baft.png', alt: 'بافت', caption: 'بافت' },
          { src: './image/c1.png', alt: 'کراپ', caption: 'کراپ' },
          { src: './image/men-Tshirt.png', alt: 'تیشرت', caption: 'تیشرت' },
          { src: './image/pants.png', alt: 'شلوار', caption: 'شلوار' },
          { src: './image/C.png', alt: 'کت', caption: 'کت' },
          { src: './image/A.png', alt: 'اکسسوری', caption: 'اکسسوری' },            
          { src: './image/T.png', alt: 'پیراهن', caption: 'پیراهن' },            
          { src: './image/men-baft (1).png', alt: 'درس', caption: 'درس' },            
                 
                   
          // Add more items as needed
        ];
     
      
        // Generate and insert HTML for each item
        const articlesHTML = items2.map(item => `
        
         <article class="w-[100px] h-[100px] bg-slate-600 rounded-md shadow-slate-600 hover:mt-14 mt-16 shadow-xl p-2 max-md:hover:rotate-45 max-md:duration-500  md:hover:mt-6 cursor-pointer duration-300">

           
              <img src="${item.src}" alt="${item.alt} ">
              
              <figcaption class="text-center text-white mt-7 text-lg   ">${item.caption}</figcaption>
              
            </article>

            
        `).join('');
      
        container.innerHTML = articlesHTML;
      });
         
       function toPersianDigits(str) {
         return str.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
          }
      document.addEventListener('DOMContentLoaded', () => {
        const section = document.getElementById("C-product");
        
        const items = [
          { id: 1, src: './image/M.jpg', alt: 'محصول_جدید', caption: 'تیشرت جذاب مردانه', type: 'کالای دیجیتال', price: 264000, addcard: 'افزودن به سبد خرید' },
          { id: 2, src: './image/M.jpg', alt: 'محصول_جدید', caption: 'تیشرت جذاب مردانه', type: 'کالای دیجیتال', price: 264000, addcard: 'افزودن به سبد خرید' },
          { id: 3, src: './image/M.jpg', alt: 'محصول_جدید', caption: 'تیشرت جذاب مردانه', type: 'کالای دیجیتال', price: 264000, addcard: 'افزودن به سبد خرید' },
          { id: 4, src: './image/M.jpg', alt: 'محصول_جدید', caption: 'تیشرت جذاب مردانه', type: 'کالای دیجیتال', price: 264000, addcard: 'افزودن به سبد خرید' },
          { id: 5, src: './image/M.jpg', alt: 'محصول_جدید', caption: 'تیشرت جذاب مردانه', type: 'کالای دیجیتال', price: 264000, addcard: 'افزودن به سبد خرید' },
          { id: 6, src: './image/M.jpg', alt: 'محصول_جدید', caption: 'تیشرت جذاب مردانه', type: 'کالای دیجیتال', price: 264000, addcard: 'افزودن به سبد خرید' },
        ];
      
        // آرایه‌ای از کارت‌هایی که باید استایل متفاوت داشته باشند
        const customStyleIds = [2, 4, 6,]; // کارت‌هایی با id = 2, 4, 6 استایل خاص می‌گیرند
      
        items.map((item) => {
          const article = document.createElement("article");
      
          // بررسی اینکه آیا id در لیست customStyleIds هست یا نه
          const customStyle = customStyleIds.includes(item.id) ? " hover:bg-purple-950  hover:text-white" : "shadow-sm shadow-black";
      
          article.className =`w-[25%] p-5 bg-purple-500  flex flex-col text-center justify-between rounded-md cursor-pointer  duration-700 max-md:w-full ${customStyle}`;
          const recommendedTag = customStyleIds.includes(item.id)  ? `<p class="text-white  sha text-2xl font-bold text-center animate-pulse  "> پیشنهادی </p>`: "";
        
            const priceFa = toPersianDigits(String(item.price)) + " هزار تومان";
          article.innerHTML = `
             <span class=bg-pink-400>${recommendedTag}</span>
            <img src="${item.src}" alt="${item.alt}" class="h-[200px]">
            <div class="h-[150px] flex flex-col justify-evenly  ">
              <h1 class="text-lg  font-medium" style=color:black>${item.caption}</h1>
              <p class="text-lg    font-semibold">${item.type}</p>
              <p class="text-lg   font-semibold">${priceFa}</p>
            </div>
            <button class="w-full p-3 bg-purple-900 text-white text-md rounded-md text-center font-semibold">${item.addcard}</button>
          `;
      
          section.appendChild(article);
        });
      });
      
      
      


      
    // script.js

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});




      
// Get the button
let backToTopButton = document.getElementById("back-to-top");

// When the user scrolls down 10px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


document.addEventListener('DOMContentLoaded', (event) => {
  const toggleSwitch = document.querySelector('#mode-toggle');
  const currentMode = localStorage.getItem('theme');
  
  if (currentMode) {
      document.body.classList.add(currentMode);

      if (currentMode === 'light-mode') {
          toggleSwitch.checked = true;
      }
  }

  toggleSwitch.addEventListener('change', function() {
      if (this.checked) {
          document.body.classList.add('light-mode');
          localStorage.setItem('theme', 'light-mode');
      } else {
          document.body.classList.remove('light-mode');
          localStorage.setItem('theme', 'dark-mode');
      }
  });
});


function toPersianDigits(str) {
  return str.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
}

document.addEventListener("DOMContentLoaded", () => {
  const swiperWrapper = document.getElementById("swiper-products");

  const products = [
    { src: './image/M.jpg', alt: 'محصول۱', caption: 'تیشرت جذاب مردانه', type: 'کالای دیجیتال', price: 264000 },
    { src: './image/M2.jpg', alt: 'محصول۲', caption: 'تیشرت جذاب مردانه', type: 'کالای دیجیتال', price: 264000 },
    { src: './image/M3.jpg', alt: 'محصول۳', caption: 'تیشرت جذاب مردانه', type: 'کالای دیجیتال', price: 264000 },
    { src: './image/S.webp', alt: 'محصول۴', caption: 'تیشرت جذاب مردانه', type: 'کالای دیجیتال', price: 264000 },
    { src: './image/S2.jpg', alt: 'محصول۵', caption: 'تیشرت جذاب مردانه', type: 'کالای دیجیتال', price: 264000 }
  ];

  products.forEach(product => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide  ";

    const priceFa = toPersianDigits(product.price.toString()) + " هزار تومان";

    slide.innerHTML = `
      <img src="${product.src}" alt="${product.alt}">
      <h2 class="text-sm text-black  font-semibold">${product.caption}</h2>
      <p class="text-sm text-white font-semibold">${product.type}</p>
      <p class="text-xl text-white font-semibold">${priceFa}</p>
      <button class="w-full h-full p-2 bg-purple-800 text-white text-sm rounded-full text-center font-semibold">افزودن به سبد خرید</button>
    `;

    swiperWrapper.appendChild(slide);
  });
});







    




      

    
    
      
      


      

