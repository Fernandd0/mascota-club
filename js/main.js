MyApp = {
  marquee: {
    init: function () {
      $(".marquee").marquee({
        duration: 18000,
        gap: 0,
        delayBeforeStart: 0,
        direction: "left",
        duplicated: true,
      });
    }
  },
  SliderCategorias: {
    init: function () {
      var swiper = new Swiper(".SliderCategorias", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          601: {
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
            },
          },
          0: {
            pagination: {
              el: ".swiper-pagination",
            },
          },
        }
      });
    }
  },
  mostrarVet: {
    init: function () {
      $("#cargarMasModulo").show();
      $("section.pageInterna .Items .item").hide();
      $(`section.pageInterna .Items .item`).slice(0, 6).show();
      $("#cargarMasModulo").click(function (e) {
        $(`section.pageInterna .Items .item:hidden`)
          .slice(0, 3)
          .slideDown(0);
        if ($(`section.pageInterna .Items .item:hidden`).length == 0) {
          $("#cargarMasModulo").attr("style", "display:none;");
        } else {
          $("#cargarMasModulo").attr("style", "display:block;");
        }
      });
    }
  },
  Slider2: {
    init: function () {
      var swiper = new Swiper(".Slider2", {
        slidesPerView: 3,
        spaceBetween: 24,
        navigation: {
          nextEl: ".populares .swiper-button-next",
          prevEl: ".populares .swiper-button-prev",
        },
        breakpoints: {
          901: {
            slidesPerView: 3,
          },
          601: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }
      });
    }
  },
  Slider3: {
    init: function () {
      var swiper = new Swiper(".Slider3", {
        slidesPerView: 3,
        spaceBetween: 24,
        navigation: {
          nextEl: ".interes .swiper-button-next",
          prevEl: ".interes .swiper-button-prev",
        },
        breakpoints: {
          901: {
            slidesPerView: 3,
          },
          601: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }
      });
    }
  },
  Change: {
    init: function () {
      document.addEventListener("DOMContentLoaded", () => {
        const dots = document.querySelectorAll(".dot");
        const titles = document.querySelectorAll(".title h2");
        const texts = document.querySelectorAll(".texto p");
        const barra = document.querySelector(".borde .color");

        let currentIndex = 0;
        let interval;

        function updateClasses() {
          dots.forEach((dot) => dot.classList.remove("select"));
          dots[currentIndex].classList.add("select");

          titles.forEach((title) => title.classList.remove("mostrar"));
          texts.forEach((text) => text.classList.remove("mostrar"));

          titles[currentIndex].classList.add("mostrar");
          texts[currentIndex].classList.add("mostrar");
          setTimeout(() => {
            barra.classList.add("mostrar");
          }, 10);
        }


        function next() {
          currentIndex = (currentIndex + 1) % dots.length;
          updateClasses();
        }

        function resetInterval() {
          clearInterval(interval);
          interval = setInterval(next, 7000);
        }

        dots.forEach((dot, index) => {
          dot.addEventListener("click", () => {
            barra.classList.remove("mostrar");
            currentIndex = index;
            updateClasses();
            resetInterval();
          });
        });

        updateClasses();
        interval = setInterval(next, 7000);
      });
    }
  },
  menumovil: {
    init: function () {
      const bntMovil = document.querySelector("header .container .lista ul li.btnMenu")
      bntMovil.addEventListener("click", () => {
        document.querySelector("section.menuMovil").classList.toggle("open")
        document.querySelector("li.btnMenu").classList.toggle("open")
      })
    }
  },
  header: {
    init: function () {
      window.addEventListener('DOMContentLoaded', function () {
        var header = document.querySelector('header');
        var headerClass = 'hLTFFw';
        var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        function handleScroll() {
          var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
          var isAtTop = currentScrollPos === 0;
          var isScrollingUp = prevScrollPos > currentScrollPos;
          var isScrollingDown = currentScrollPos > prevScrollPos + 3;
          if (isAtTop) {
            headerClass = 'hLTFFw'
          } else if (isScrollingUp) {
            headerClass = 'leoCdG'
          } else if (isScrollingDown) {
            headerClass = 'bVLcxx'
          }
          header.className = headerClass;
          prevScrollPos = currentScrollPos
        }
        window.addEventListener('scroll', handleScroll);
      });
    }
  },
  SliderInstagram:{
    init: function () {
      var swiper = new Swiper(".sliderInstagram", {
        slidesPerView: 4,
        spaceBetween: 27,
        breakpoints: {
          1025: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          901: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          769: {
            slidesPerView: 3.05,
            spaceBetween: 20,
          },
          501: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
        },
      });
    }
  }
}

if ($(".sliderInstagram").length > 0) {
  MyApp.SliderInstagram.init();
}

if ($("header").length > 0) {
  MyApp.header.init();
}

if ($("section.menuMovil").length > 0) {
  MyApp.menumovil.init();
}

if ($(".marquee").length > 0) {
  MyApp.marquee.init();
}

if ($(".SliderCategorias").length > 0) {
  MyApp.SliderCategorias.init();
}

if ($("section.pageInterna .Items").length > 0) {
  MyApp.mostrarVet.init();
}

if ($(".Slider2").length > 0) {
  MyApp.Slider2.init();
}

if ($(".Slider3").length > 0) {
  MyApp.Slider3.init();
}

if ($("section.change").length > 0) {
  MyApp.Change.init();
}