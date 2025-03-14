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
    },
  },
  SliderCategorias: {
    init: function () {
      var swiper = new Swiper(".SliderCategorias", {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          601: {
            spaceBetween: 30,
            slidesPerView: 1,
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
            },
          },
          0: {
            spaceBetween: 10,
            slidesPerView: 1.05,
            pagination: {
              el: ".swiper-pagination",
            },
          },
        },
      });
    },
  },
  mostrarVet: {
    init: function () {
      $("#cargarMasModulo").show();
      $("section.pageInterna .Items .item").hide();
      $(`section.pageInterna .Items .item`).slice(0, 6).show();
      $("#cargarMasModulo").click(function (e) {
        $(`section.pageInterna .Items .item:hidden`).slice(0, 3).slideDown(0);
        if ($(`section.pageInterna .Items .item:hidden`).length == 0) {
          $("#cargarMasModulo").attr("style", "display:none;");
        } else {
          $("#cargarMasModulo").attr("style", "display:block;");
        }
      });
    },
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
        },
      });
    },
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
        },
      });
    },
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
    },
  },
  menumovil: {
    init: function () {
      const bntMovil = document.querySelector(
        "header .container .lista ul li.btnMenu"
      );
      const bntMovilmovil = document.querySelectorAll(
        "section.menuMovil .categorias ul li a"
      );
      bntMovil.addEventListener("click", () => {
        document.querySelector("section.menuMovil").classList.toggle("open");
        document.querySelector("li.btnMenu").classList.toggle("open");
      });
      bntMovilmovil.forEach((btn) => {
        btn.addEventListener("click", () => {
          document.querySelector("section.menuMovil").classList.remove("open");
          document.querySelector("li.btnMenu").classList.remove("open");
        });
      });
    },
  },
  header: {
    init: function () {
      window.addEventListener("DOMContentLoaded", function () {
        var header = document.querySelector(".header");
        var prevScrollPos =
          window.pageYOffset || document.documentElement.scrollTop;
        var scrollThreshold = 150;

        function handleScroll() {
          var currentScrollPos =
            window.pageYOffset || document.documentElement.scrollTop;
          var isAtTop = currentScrollPos === 0;

          if (isAtTop) {
            header.classList.remove("leoCdG");
          } else if (currentScrollPos > scrollThreshold) {
            header.classList.add("leoCdG");
          }
        }

        window.addEventListener("scroll", handleScroll);
      });
    },
  },
  headerTienda: {
    init: function () {
      window.addEventListener("DOMContentLoaded", function () {
        var header = document.querySelector(".headerTienda");
        var scrollThreshold = 150;

        function handleScroll() {
          var currentScrollPos =
            window.pageYOffset || document.documentElement.scrollTop;
          var isAtTop = currentScrollPos === 0;

          if (isAtTop) {
            header.classList.remove("htm");
          } else if (currentScrollPos > scrollThreshold) {
            header.classList.add("htm");
          }
        }

        window.addEventListener("scroll", handleScroll);
      });
    },
  },
  headerTiendaPerros: {
    init: function () {
      window.addEventListener("DOMContentLoaded", function () {
        var header = document.querySelector(".headerTiendaPerros");
        var scrollThreshold = 150;

        function handleScroll() {
          var currentScrollPos =
            window.pageYOffset || document.documentElement.scrollTop;
          var isAtTop = currentScrollPos === 0;

          if (isAtTop) {
            header.classList.remove("bg-blue-tienda");
          } else if (currentScrollPos > scrollThreshold) {
            header.classList.add("bg-blue-tienda");
          }
        }

        window.addEventListener("scroll", handleScroll);
      });
    },
  },
  headerTiendaPetLovers: {
    init: function () {
      window.addEventListener("DOMContentLoaded", function () {
        var header = document.querySelector(".headerTiendaPetLovers");
        var scrollThreshold = 150;

        function handleScroll() {
          var currentScrollPos =
            window.pageYOffset || document.documentElement.scrollTop;
          var isAtTop = currentScrollPos === 0;

          if (isAtTop) {
            header.classList.remove("bg-blue-petlovers");
          } else if (currentScrollPos > scrollThreshold) {
            header.classList.add("bg-blue-petlovers");
          }
        }

        window.addEventListener("scroll", handleScroll);
      });
    },
  },

  SliderInstagram: {
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
    },
  },
  ValidateFooter: {
    init: function () {
      var inputCorreo = document.querySelector(
        ".formulario2 input[type=email]"
      );
      const inputsformulario2 = document.querySelectorAll(
        ".formulario2 input[type='email']"
      );

      function validateInputCorreo(e) {
        var valueCorreo = inputCorreo.value;
        if (
          valueCorreo.includes("@") &&
          (valueCorreo.includes(".com") ||
            valueCorreo.includes(".pe") ||
            valueCorreo.includes(".gob") ||
            valueCorreo.includes(".net") ||
            valueCorreo.includes(".org") ||
            valueCorreo.includes(".edu") ||
            valueCorreo.includes(".gov") ||
            valueCorreo.includes(".mil"))
        ) {
          inputCorreo.classList.remove("error");
        } else {
          inputCorreo.classList.add("error");
          e.preventDefault();
        }
      }

      document.addEventListener("click", function (e) {
        if (e.target.closest(".formulario2  button")) {
          validateInputCorreo(e);
        }
      });

      inputsformulario2.forEach((input) => {
        input.addEventListener("input", function (event) {
          const value = event.target.value;
          let sanitizedValue = value;
          if (event.target.type === "email") {
            sanitizedValue = value.replace(/[<>;&#%$"'\[\]{}=?!/()¿,º¡]/g, "");
          }
          if (value !== sanitizedValue) {
            event.target.value = sanitizedValue;
          }
        });
      });
    },
  },
  mostraritemsmovil: {
    init: function () {
      /* para todos */
      $("section.interes.todos .contentMovilpopulares .itemCategoria").hide();
      $(`section.interes.todos .contentMovilpopulares .itemCategoria`)
        .slice(0, 3)
        .show();
      $("section.interes.todos button.btnmovil").click(function (e) {
        $(`section.interes.todos .contentMovilpopulares .itemCategoria:hidden`)
          .slice(0, 3)
          .slideDown(0);
        if (
          $(
            `section.interes.todos .contentMovilpopulares .itemCategoria:hidden`
          ).length == 0
        ) {
          $("section.interes.todos button.btnmovil").attr(
            "style",
            "display:none;"
          );
        } else {
          $("section.interes.todos button.btnmovil").attr(
            "style",
            "display:block;"
          );
        }
      });

      /* para gatos */
      $("section.interes.gatos .contentMovilpopulares .itemCategoria").hide();
      $(`section.interes.gatos .contentMovilpopulares .itemCategoria`)
        .slice(0, 3)
        .show();
      $("section.interes.gatos button.btnmovil").click(function (e) {
        $(`section.interes.gatos .contentMovilpopulares .itemCategoria:hidden`)
          .slice(0, 3)
          .slideDown(0);
        if (
          $(
            `section.interes.gatos .contentMovilpopulares .itemCategoria:hidden`
          ).length == 0
        ) {
          $("section.interes.gatos button.btnmovil").attr(
            "style",
            "display:none;"
          );
        } else {
          $("section.interes.gatos button.btnmovil").attr(
            "style",
            "display:block;"
          );
        }
      });

      /* para perro */
      $("section.interes.perro .contentMovilpopulares .itemCategoria").hide();
      $(`section.interes.perro .contentMovilpopulares .itemCategoria`)
        .slice(0, 3)
        .show();
      $("section.interes.perro button.btnmovil").click(function (e) {
        $(`section.interes.perro .contentMovilpopulares .itemCategoria:hidden`)
          .slice(0, 3)
          .slideDown(0);
        if (
          $(
            `section.interes.perro .contentMovilpopulares .itemCategoria:hidden`
          ).length == 0
        ) {
          $("section.interes.perro button.btnmovil").attr(
            "style",
            "display:none;"
          );
        } else {
          $("section.interes.perro button.btnmovil").attr(
            "style",
            "display:block;"
          );
        }
      });

      /* para articulo */
      $(
        "body.single section.interes .contentMovilpopulares .itemCategoria"
      ).hide();
      $(`body.single section.interes .contentMovilpopulares .itemCategoria`)
        .slice(0, 3)
        .show();
      $("body.single section.interes button.btnmovil").click(function (e) {
        $(
          `body.single section.interes .contentMovilpopulares .itemCategoria:hidden`
        )
          .slice(0, 3)
          .slideDown(0);
        if (
          $(
            `body.single section.interes .contentMovilpopulares .itemCategoria:hidden`
          ).length == 0
        ) {
          $("body.single section.interes button.btnmovil").attr(
            "style",
            "display:none;"
          );
        } else {
          $("body.single section.interes button.btnmovil").attr(
            "style",
            "display:block;"
          );
        }
      });
    },
  },
  filtrosMascotas: {
    init: function () {
      const body = document.querySelector("body");
      const listaMascotas = document.querySelectorAll(
        "header .container .categorias ul li"
      );
      const listaMascotasEnlace = document.querySelectorAll(
        "header .container .categorias ul li a"
      );

      if (
        body.classList.contains("home") ||
        body.classList.contains("page-template-nosotros") ||
        body.classList.contains("page-template-contacto") ||
        body.classList.contains("page-template-politicas-de-privacidad") ||
        body.classList.contains("page-template-terminos-y-condiciones")
      ) {
        document
          .querySelector("header .container .categorias ul li.Todos a")
          .classList.add("select");
      }
      if (body.classList.contains("page-template-gato")) {
        document
          .querySelector("header .container .categorias ul li.Gato a")
          .classList.add("select");
      }
      if (body.classList.contains("page-template-perro")) {
        document
          .querySelector("header .container .categorias ul li.Perro a")
          .classList.add("select");
      }
      if (
        body.classList.contains("page-template-cuidado") ||
        body.classList.contains("page-template-entretenimiento") ||
        body.classList.contains("page-template-actividades") ||
        body.classList.contains("page-template-destinos") ||
        body.classList.contains("page-template-cuidado-todos") ||
        body.classList.contains("page-template-entretenimiento-todos") ||
        body.classList.contains("page-template-actividades-todos") ||
        body.classList.contains("page-template-destinos-todos")
      ) {
        document
          .querySelector("header .container .categorias ul li.Todos a")
          .classList.add("select");
        listaMascotas.forEach((li) => {
          const claseLi = li.className;
          const claseMinusc = claseLi.toLowerCase();
          const aTag = li.querySelector("a");
          aTag.href = `#${claseMinusc}`;
        });

        const listaMascotasEnlace2 = document.querySelectorAll(
          "header .container .categorias ul li a"
        );

        listaMascotasEnlace2.forEach((enlace) => {
          document.body.classList.add("todos");
          enlace.addEventListener("click", (event) => {
            //event.preventDefault();
            document.body.classList.remove(
              document.body.classList[document.body.classList.length - 1]
            );
            const claseEnlace = enlace.parentElement.className.toLowerCase();
            const heroMascota = document.querySelector("section.heroMascota");
            if (heroMascota) {
              const clasesHero = heroMascota.classList;
              if (clasesHero.length > 0) {
                heroMascota.classList.remove(clasesHero[clasesHero.length - 1]);
              }
              heroMascota.classList.add(claseEnlace);
              body.classList.add(claseEnlace);
            }
          });
        });
      }

      listaMascotasEnlace.forEach((enlace) => {
        enlace.addEventListener("click", (event) => {
          listaMascotasEnlace.forEach((item) => {
            item.classList.remove("select");
          });
          enlace.classList.add("select");
        });
      });
    },
  },
  filtrosMascotas2: {
    init: function () {
      const bodymenuMovil = document.querySelector("body");
      const listaMascotasmenuMovil = document.querySelectorAll(
        ".menuMovil .container .categorias ul li"
      );
      const listaMascotasEnlacemenuMovil = document.querySelectorAll(
        ".menuMovil .container .categorias ul li a"
      );

      if (
        bodymenuMovil.classList.contains("home") ||
        bodymenuMovil.classList.contains("page-template-nosotros") ||
        bodymenuMovil.classList.contains("page-template-contacto") ||
        bodymenuMovil.classList.contains(
          "page-template-politicas-de-privacidad"
        ) ||
        bodymenuMovil.classList.contains("page-template-terminos-y-condiciones")
      ) {
        document
          .querySelector(".menuMovil .container .categorias ul li.Todos a")
          .classList.add("select");
      }
      if (bodymenuMovil.classList.contains("page-template-gato")) {
        document
          .querySelector(".menuMovil .container .categorias ul li.Gato a")
          .classList.add("select");
      }
      if (bodymenuMovil.classList.contains("page-template-perro")) {
        document
          .querySelector(".menuMovil .container .categorias ul li.Perro a")
          .classList.add("select");
      }
      if (
        bodymenuMovil.classList.contains("page-template-cuidado") ||
        bodymenuMovil.classList.contains("page-template-entretenimiento") ||
        bodymenuMovil.classList.contains("page-template-actividades") ||
        bodymenuMovil.classList.contains("page-template-destinos") ||
        bodymenuMovil.classList.contains("page-template-cuidado-todos") ||
        bodymenuMovil.classList.contains(
          "page-template-entretenimiento-todos"
        ) ||
        bodymenuMovil.classList.contains("page-template-actividades-todos") ||
        bodymenuMovil.classList.contains("page-template-destinos-todos")
      ) {
        document
          .querySelector(".menuMovil .container .categorias ul li.Todos a")
          .classList.add("select");
        listaMascotasmenuMovil.forEach((li) => {
          const claseLimenuMovil = li.className;
          const claseMinuscmenuMovil = claseLimenuMovil.toLowerCase();
          const aTag = li.querySelector("a");
          aTag.href = `#${claseMinuscmenuMovil}`;
        });

        const listaMascotasEnlace2menuMovil = document.querySelectorAll(
          ".menuMovil .container .categorias ul li a"
        );

        listaMascotasEnlace2menuMovil.forEach((enlace) => {
          document.body.classList.add("todos");
          enlace.addEventListener("click", (event) => {
            //event.preventDefault();
            document.body.classList.remove(
              document.body.classList[document.body.classList.length - 1]
            );
            const claseEnlacemenuMovil =
              enlace.parentElement.className.toLowerCase();
            const heroMascotamenuMovil = document.querySelector(
              "section.heroMascota"
            );
            if (heroMascotamenuMovil) {
              const clasesHeromenuMovil = heroMascotamenuMovil.classList;
              if (clasesHeromenuMovil.length > 0) {
                heroMascotamenuMovil.classList.remove(
                  clasesHeromenuMovil[clasesHeromenuMovil.length - 1]
                );
              }
              heroMascotamenuMovil.classList.add(claseEnlacemenuMovil);
              bodymenuMovil.classList.add(claseEnlacemenuMovil);
            }
          });
        });
      }

      listaMascotasEnlacemenuMovil.forEach((enlace) => {
        enlace.addEventListener("click", (event) => {
          listaMascotasEnlacemenuMovil.forEach((item) => {
            item.classList.remove("select");
          });
          enlace.classList.add("select");
        });
      });
    },
  },
  validateContacto: {
    init: function () {
      const listainputs = document.querySelectorAll(
        'section.contacto .formulario input:not([type="hidden"])'
      );
      const listatestarea = document.querySelectorAll(
        "section.contacto .formulario textarea"
      );
      var inputCorreo = document.querySelector(
        "section.contacto .formulario input[type=email]"
      );

      function valiteInputs(e) {
        for (let y = 0; y < listainputs.length; y++) {
          if (!listainputs[y].value) {
            listainputs[y].classList.add("error");
            e.preventDefault();
          } else {
            listainputs[y].classList.remove("error");
          }
        }
      }
      function validatetarea(e) {
        for (let y = 0; y < listatestarea.length; y++) {
          if (!listatestarea[y].value) {
            listatestarea[y].classList.add("error");
            e.preventDefault();
          } else {
            listatestarea[y].classList.remove("error");
          }
        }
      }
      function validateInputCorreo(e) {
        var valueCorreo = inputCorreo.value;
        if (
          valueCorreo.includes("@") &&
          (valueCorreo.includes(".com") ||
            valueCorreo.includes(".pe") ||
            valueCorreo.includes(".gob") ||
            valueCorreo.includes(".net") ||
            valueCorreo.includes(".org") ||
            valueCorreo.includes(".edu") ||
            valueCorreo.includes(".gov") ||
            valueCorreo.includes(".mil"))
        ) {
          inputCorreo.classList.remove("error");
        } else {
          inputCorreo.classList.add("error");
          e.preventDefault();
        }
      }

      document.addEventListener("click", function (e) {
        if (e.target.closest("section.contacto .formulario  button")) {
          valiteInputs(e);
          validateInputCorreo(e);
          validatetarea(e);
        }
      });
    },
  },
  subirElementos: {
    init: function () {
      var contentfooter = document.querySelector("section.hero");
      var figuras = document.querySelector("section.hero .contenImgs");
      console.log("entrooo");

      var sticky = gsap.timeline({
        scrollTrigger: {
          //markers: true,
          trigger: contentfooter,
          start: "0% 0%",
          end: "100% 30%",
          scrub: true,
        },
      });
      sticky.to(figuras, { y: "-50px" });
    },
  },
  copiarPortapapeles: {
    init: function () {
      document.addEventListener("DOMContentLoaded", (event) => {
        const copyButton = document.querySelector(".btncopiar");
        const link = document.querySelector(".btncopiar").href;
        copyButton.addEventListener("click", (e) => {
          e.preventDefault(e);
          // Crear un elemento de texto temporal
          const tempInput = document.createElement("input");
          tempInput.style.position = "absolute";
          tempInput.style.left = "-9999px";
          tempInput.value = link;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand("copy");
          copyButton.classList.add("copiado");
          setTimeout(() => {
            copyButton.classList.remove("copiado");
          }, 5000);
          //document.body.removeChild(tempInput)
        });
      });
    },
  },
  enviodeformulariofooter: {
    init: function () {
      var inputCorreo = document.querySelector(
        "footer .container .part1 .formulario2 form input#email"
      );
      document.addEventListener(
        "wpcf7mailsent",
        function (event) {
          if (event.detail.unitTag === "wpcf7-f175-o1") {
            inputCorreo.placeholder = "¡Gracias por suscribirte!";
          }
        },
        false
      );
    },
  },
};

if ($("footer .container .part1 .formulario2").length > 0) {
  MyApp.enviodeformulariofooter.init();
}

if ($(".btncopiar").length > 0) {
  MyApp.copiarPortapapeles.init();
}

if ($("section.hero .contenImgs").length > 0) {
  MyApp.subirElementos.init();
}

if ($("section.contacto .formulario").length > 0) {
  MyApp.validateContacto.init();
}

if ($(".contentMovilpopulares.interes").length > 0) {
  MyApp.mostraritemsmovil.init();
}

if ($(".formulario2.newsletter").length > 0) {
  MyApp.ValidateFooter.init();
}

if ($(".sliderInstagram").length > 0) {
  MyApp.SliderInstagram.init();
}

if ($(".header").length > 0) {
  MyApp.header.init();
}

if ($(".headerTienda").length > 0) {
  MyApp.headerTienda.init();
}

if ($(".headerTiendaPerros").length > 0) {
  MyApp.headerTiendaPerros.init();
}

if ($(".headerTiendaPetLovers").length > 0) {
  MyApp.headerTiendaPetLovers.init();
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

//if ($("section.change").length > 0) {
MyApp.filtrosMascotas.init();
MyApp.filtrosMascotas2.init();
//}

//new store:
document.addEventListener("DOMContentLoaded", function () {
  //sliders
  const MyApp = {
    swiperProductos: {
      init: function () {
        new Swiper(".swiperProductos", {
          slidesPerView: 4,
          spaceBetween: 30,
          fadeEffect: { crossFade: true },
          speed: 800,
          navigation: {
            nextEl: ".swiper-productos .swiper-button-next",
            prevEl: ".swiper-productos .swiper-button-prev",
          },
          breakpoints: {
            0: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          },
          pagination: {
            el: ".swiper-productos .swiper-pagination",
            dynamicBullets: true,
            clickable: true,
          },
        });
      },
    },
    swiperHeroTienda: {
      init: function () {
        new Swiper(".swiperHeroTienda", {
          slidesPerView: 1,
          spaceBetween: 0,
          fadeEffect: { crossFade: true },
          speed: 800,
          navigation: {
            nextEl: ".swiper-hero-tienda .swiper-button-next",
            prevEl: ".swiper-hero-tienda .swiper-button-prev",
          },
          pagination: {
            el: ".swiper-hero-tienda .swiper-pagination",
            dynamicBullets: true,
            clickable: true,
          },
        });
      },
    },
    swiperFiltros: {
      init: function () {
        new Swiper(".swiperFiltros", {
          slidesPerView: 7,
          spaceBetween: 20,
          fadeEffect: { crossFade: true },
          speed: 800,
          navigation: {
            nextEl: ".swiper-filtros .swiper-button-next",
            prevEl: ".swiper-filtros .swiper-button-prev",
          },
          breakpoints: {
            0: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          },
          scrollbar: {
            el: ".swiper-filtros .swiper-scrollbar",
            hide: false,
            draggable: true,
          },
        });
      },
    },
  };

  if (document.querySelectorAll(".swiperProductos").length > 0) {
    MyApp.swiperProductos.init();
  }
  if (document.querySelectorAll(".swiperHeroTienda").length > 0) {
    MyApp.swiperHeroTienda.init();
  }
  if (document.querySelectorAll(".swiperFiltros").length > 0) {
    MyApp.swiperFiltros.init();
  }
});

//marquee
$(document).ready(function () {
  $(".marquee-tienda").marquee({
    duration: 20000,
    gap: 0,
    delayBeforeStart: 10,
    direction: "left",
    duplicated: true,
    startVisible: true,
    pauseOnHover: true,
  });
});

//interna de producto
document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnail");

  if (mainImage && thumbnails.length > 0) {
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("mouseover", function () {
        mainImage.src = this.src;
      });
    });
  }
});
function mostrarContenido(pestaña) {
  const descripcionTab = document.getElementById("descripcionTab");
  const detallesTab = document.getElementById("detallesTab");
  const descripcionContenido = document.getElementById("descripcion");
  const detallesContenido = document.getElementById("detalles");

  if (pestaña === "descripcion") {
    descripcionContenido.classList.remove("hidden");
    detallesContenido.classList.add("hidden");

    descripcionTab.classList.add("text-gray-800", "border-b-2", "border-black");
    descripcionTab.classList.remove("text-gray-500");

    detallesTab.classList.remove("text-gray-800", "border-b-2", "border-black");
    detallesTab.classList.add("text-gray-500");
  } else {
    detallesContenido.classList.remove("hidden");
    descripcionContenido.classList.add("hidden");

    detallesTab.classList.add("text-gray-800", "border-b-2", "border-black");
    detallesTab.classList.remove("text-gray-500");

    descripcionTab.classList.remove(
      "text-gray-800",
      "border-b-2",
      "border-black"
    );
    descripcionTab.classList.add("text-gray-500");
  }
}

//shopcar popup
const shopcarOverlay = document.querySelector(".shopcar-overlay");
const shopCarPopup = document.querySelector(".shopcar-popup");
const openShopCar = document.querySelector(".open-shopcar");
const closeShopCarButtons = document.querySelectorAll(".close-shopcar");

if (
  shopcarOverlay &&
  shopCarPopup &&
  openShopCar &&
  closeShopCarButtons.length > 0
) {
  // Abrir popup
  openShopCar.addEventListener("click", function () {
    shopcarOverlay.classList.remove("hidden");
    shopCarPopup.classList.remove("right-[-100vw]");
    shopCarPopup.classList.add("right-0");
    document.body.classList.add("no-scroll"); // Desactiva el scroll del fondo
  });

  // Cerrar popup
  closeShopCarButtons.forEach((button) => {
    button.addEventListener("click", function () {
      shopCarPopup.classList.remove("right-0");
      shopCarPopup.classList.add("right-[-100vw]");
      setTimeout(() => {
        shopcarOverlay.classList.add("hidden");
        document.body.classList.remove("no-scroll");
      }, 300);
    });
  });

  // Cerrar popup al hacer clic fuera del popup
  shopcarOverlay.addEventListener("click", function (e) {
    if (e.target === shopcarOverlay) {
      shopCarPopup.classList.remove("right-0");
      shopCarPopup.classList.add("right-[-100vw]");
      setTimeout(() => {
        shopcarOverlay.classList.add("hidden");
        document.body.classList.remove("no-scroll");
      }, 300);
    }
  });
}

//checkout
function toggleAccordion(id) {
  // Oculta todas las secciones
  const sections = ["envio", "contacto", "pago"];
  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (sectionId !== id) {
      section.classList.add("hidden");
    }
  });
  // Alterna la visibilidad de la sección seleccionada
  const selectedSection = document.getElementById(id);
  selectedSection.classList.toggle("hidden");
}

function toggleAccordion(id) {
  // Oculta todas las secciones
  const sections = ["contacto", "pago"];
  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (sectionId !== id) {
      section.classList.add("hidden");
    }
  });
  // Alterna la visibilidad de la sección seleccionada
  const selectedSection = document.getElementById(id);
  selectedSection.classList.toggle("hidden");
}

function toggleAccordion(id) {
  // Oculta todas las secciones
  const sections = ["pago"];
  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (sectionId !== id) {
      section.classList.add("hidden");
    }
  });
  // Alterna la visibilidad de la sección seleccionada
  const selectedSection = document.getElementById(id);
  selectedSection.classList.toggle("hidden");
}

// Validar existencia de elementos antes de ejecutar el código

// Modal del buscador
const openModalBtnSearch = document.getElementById("openModalBtnSearch");
const closeModalBtnSearch = document.getElementById("closeModalBtnSearch");
const modalOverlaySearch = document.getElementById("modalOverlaySearch");
const modalContentSearch = document.getElementById("modalContentSearch");

if (
  openModalBtnSearch &&
  closeModalBtnSearch &&
  modalOverlaySearch &&
  modalContentSearch
) {
  function openModalShopCart() {
    modalOverlaySearch.classList.remove("opacity-0", "pointer-events-none");
    modalContentSearch.classList.remove("opacity-0", "scale-100");
  }

  function closeModalShopCart() {
    modalOverlaySearch.classList.add("opacity-0", "pointer-events-none");
    modalContentSearch.classList.add("opacity-0", "scale-95");
  }

  openModalBtnSearch.addEventListener("click", openModalShopCart);
  closeModalBtnSearch.addEventListener("click", closeModalShopCart);
  modalOverlaySearch.addEventListener("click", (e) => {
    if (e.target === modalOverlaySearch) closeModalShopCart();
  });
}

// Modal de filtros
const openModalBtnFilter = document.getElementById("openModalBtnFilter");
const closeModalBtnFilter = document.getElementById("closeModalBtnFilter");
const modalOverlayFilter = document.getElementById("modalOverlayFilter");
const modalContentFilter = document.getElementById("modalContentFilter");

if (
  openModalBtnFilter &&
  closeModalBtnFilter &&
  modalOverlayFilter &&
  modalContentFilter
) {
  function openModalFilter() {
    modalOverlayFilter.classList.remove("opacity-0", "pointer-events-none");
    modalContentFilter.classList.remove("opacity-0", "scale-100");
  }

  function closeModalFilter() {
    modalOverlayFilter.classList.add("opacity-0", "pointer-events-none");
    modalContentFilter.classList.add("opacity-0", "scale-95");
  }

  openModalBtnFilter.addEventListener("click", openModalFilter);
  closeModalBtnFilter.addEventListener("click", closeModalFilter);
  modalOverlayFilter.addEventListener("click", (e) => {
    if (e.target === modalOverlayFilter) closeModalFilter();
  });
}

// Modal de suscripción
const openModalBtnMail = document.getElementById("openModalBtnMail");
const closeModalBtnMail = document.getElementById("closeModalBtnMail");
const modalOverlayMail = document.getElementById("modalOverlayMail");
const modalContentMail = document.getElementById("modalContentMail");

if (
  openModalBtnMail &&
  closeModalBtnMail &&
  modalOverlayMail &&
  modalContentMail
) {
  function openModalMail() {
    modalOverlayMail.classList.remove("opacity-0", "pointer-events-none");
    modalContentMail.classList.remove("opacity-0", "scale-100");
  }

  function closeModalMail() {
    modalOverlayMail.classList.add("opacity-0", "pointer-events-none");
    modalContentMail.classList.add("opacity-0", "scale-95");
  }

  openModalBtnMail.addEventListener("click", openModalMail);
  closeModalBtnMail.addEventListener("click", closeModalMail);
  modalOverlayMail.addEventListener("click", (e) => {
    if (e.target === modalOverlayMail) closeModalMail();
  });
}

//modal de gracias
const openModalBtnThanks = document.getElementById("openModalBtnThanks");
const closeModalBtnThanks = document.getElementById("closeModalBtnThanks");
const modalOverlayThanks = document.getElementById("modalOverlayThanks");
const modalContentThanks = document.getElementById("modalContentThanks");

if (
  openModalBtnThanks &&
  closeModalBtnThanks &&
  modalOverlayThanks &&
  modalContentThanks
) {
  function openModalThanks() {
    modalOverlayThanks.classList.remove("opacity-0", "pointer-events-none");
    modalContentThanks.classList.remove("opacity-0", "scale-100");
  }

  function closeModalThanks() {
    modalOverlayThanks.classList.add("opacity-0", "pointer-events-none");
    modalContentThanks.classList.add("opacity-0", "scale-95");
  }

  openModalBtnThanks.addEventListener("click", openModalThanks);
  closeModalBtnThanks.addEventListener("click", closeModalThanks);
  modalOverlayThanks.addEventListener("click", (e) => {
    if (e.target === modalOverlayThanks) closeModalThanks();
  });
}

function funThanks() {
  closeModalMail();
  openModalThanks();
}

// // inicia animacion de icono con lupa del modal search
// const containerSearch = document.getElementById("containerSearch");
// const svg = document.getElementById("movableSvg");

// let angle = 0; // Ángulo inicial
// let radius = 20; // Radio inicial
// let centerX = containerSearch.offsetWidth / 2; // Centro inicial (eje X)
// let centerY = containerSearch.offsetHeight / 2; // Centro inicial (eje Y)
// let changeInterval = 0; // Contador para cambiar el centro y radio

// // Función para obtener un radio aleatorio dentro de los límites del contenedor
// function getRandomRadius() {
//   const maxRadius = Math.min(containerSearch.offsetWidth, containerSearch.offsetHeight) / 2 - 20;
//   return Math.random() * (maxRadius * 0.7) + (maxRadius * 0.3); // Controlar el rango
// }

// // Función para obtener un nuevo centro dentro de los límites
// function getRandomCenter() {
//   const padding = radius + svg.clientWidth / 2; // Considerar el tamaño del SVG y el radio
//   return {
//     x: Math.random() * (containerSearch.offsetWidth - padding * 2) + padding,
//     y: Math.random() * (containerSearch.offsetHeight - padding * 2) + padding,
//   };
// }

// // Animar el SVG
// function animate() {
//   // Calcular las coordenadas actuales basadas en el ángulo y el centro
//   const x = centerX + radius * Math.cos(angle);
//   const y = centerY + radius * Math.sin(angle);

//   // Ajustar la posición del SVG
//   svg.style.transform = `translate(${x - svg.clientWidth / 2}px, ${y - svg.clientHeight / 2}px)`;

//   // Incrementar el ángulo para un movimiento circular más suave
//   angle += 0.02; // Ajustar la velocidad para que sea más suave

//   // Cambiar gradualmente el centro y radio para que la transición sea más suave
//   changeInterval++;
//   if (changeInterval > 200) { // Cambiar con suavidad, cada 200 cuadros (~3.5 segundos)
//     const newCenter = getRandomCenter();
//     const targetRadius = getRandomRadius();

//     // Suavizar cambios en el centro con interpolación más gradual
//     centerX += (newCenter.x - centerX) * 0.03; // Suaviza más el centro
//     centerY += (newCenter.y - centerY) * 0.03;

//     // Suavizar cambios en el radio con interpolación más gradual
//     radius += (targetRadius - radius) * 0.03;

//     // Comprobar que el cambio no sea brusco y evitar "vibraciones"
//     if (Math.abs(newCenter.x - centerX) < 0.5 && Math.abs(newCenter.y - centerY) < 0.5 && Math.abs(targetRadius - radius) < 0.5) {
//       changeInterval = 0; // Reiniciar el contador solo cuando los cambios sean mínimos
//     }
//   }

//   // Continuar la animación
//   requestAnimationFrame(animate);
// }

// // Iniciar la animación
// animate();



