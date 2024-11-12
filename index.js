
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mexor</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="icon" type="image/png" href="images/logoMexor.png">
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script> 
    <script src="./script.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML" async></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</head>
<body>
    <!--   ENCABEZADO     -->
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src="images/logoMexor.png" alt="" width="100" height="60" class="d-inline-block align-text-top">
              
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav" >
                <!--   Mover la navegación a la derecha -->
                <ul class="navbar-nav ms-auto">
                    
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">¿Quiénes somos?</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Productos</a>
                  </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Ubicación</a>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contactanos</a>

                   
                  </li>
                 
                </ul>
                </div>
            </div>
        </nav>
    </header>


    <main>
        <!--   CARRUSEL     -->
        <section class="container">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="images/mexorCarrusel1.png" class="d-block w-100" alt="logoMexor">
                    <div class="carousel-caption d-none d-md-block">
                      <h5 style="color: #b3141d; font-size: 24px; font-weight: bold;"> MULTISERVICIOS PARA LA EXCELENCIA ORGANIZACIONAL S.A. DE C.V.</h5>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="images/mexorCarrusel2.png" class="d-block w-100" alt="logoMexor">
                    <div class="carousel-caption d-none d-md-block">
                      
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
        </section>

        <section>

          <div class="row g-0">
            <!--    BOTONES SELECCION DE PRODUCTOS     -->
            
            <div class="col-6 col-md-1 justify-content-start" style="width: 11rem; height: 25rem;" >
              <div style="display: flex; flex-direction: column;">
                  <button id="btn-oficina" type="button" class="btn btn-outline-danger" style="flex: 1; width: 9rem; height: 2rem;">Oficina</button>
                  <button id="btn-informatica" type="button" class="btn btn-outline-danger" style="flex: 1; width: 9rem; height: 2rem;">Informatica</button>
                  <button id="btn-salud" type="button" class="btn btn-outline-danger" style="flex: 1; width: 9rem; height: 2rem;">Medicina y Salud</button>
                  <button id="btn-promocion" type="button" class="btn btn-outline-danger" style="flex: 1; width: 9rem; height: 2rem;">Publicidad y Promoción</button>
              </div>
            </div>
    
    
            <div class="col-sm-6 col-md-9">
              <div class="row">
                <div id="cards-container" class="row g-0">
                  <!-- Aquí se mostrarán las cards -->
                    <div class="col">
                      <div class="card" style="width: 15rem; height: 24rem; padding: 1rem;">
                        <img src="images/mexorCarrusel1.png" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Oficina Card</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary" style="width: 9rem; height: 2rem;">Go somewhere</a>
                        </div>
                      </div>
                    </div>
                </div>

                
        

          </div>

        </section>

    </main>

    <script>
      document.addEventListener("DOMContentLoaded", function() {
        // Obtener referencias a los botones

        const btnOficina = document.getElementById("btn-oficina");
        const btnInformatica = document.getElementById("btn-informatica");
        const btnSalud = document.getElementById("btn-salud");
        const btnPromocion = document.getElementById("btn-promocion");
        

        // Obtener referencias al contenedor de las cards
        const cardsContainer = document.getElementById("cards-container");

        // Función para crear una card
        function createCard(title) {
          const card = document.createElement("div");
          card.classList.add("col");

          const cardHtml = `
            <div class="card" style="width: 15rem; height: 24rem; padding: 1rem;">
              <img src="images/mexorCarrusel1.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary" style="width: 9rem; height: 2rem;">Go somewhere</a>
              </div>
            </div>
          `;
          card.innerHTML = cardHtml;

          return card;
        }

        // Función para mostrar las cards correspondientes a la categoría seleccionada
        function showCards(category) {
          cardsContainer.innerHTML = "";

          switch (category) {
            case "oficina":
              cardsContainer.appendChild(createCard("Oficina Card"));

              break;
            case "informatica":
              cardsContainer.appendChild(createCard("Informática Card"));
              break;
            case "salud":
              cardsContainer.appendChild(createCard("Medicina y Salud Card"));
              break;
            case "promocion":
              cardsContainer.appendChild(createCard("Publicidad y Promoción Card"));
              break;
            default:
              break;
          }
        }

        // Asignar eventos de clic a cada botón para mostrar las cards correspondientes
        btnOficina.addEventListener("click", () => {
          showCards("oficina");
        });

        btnInformatica.addEventListener("click", () => {
          showCards("informatica");
        });

        btnSalud.addEventListener("click", () => {
          showCards("salud");
        });

        btnPromocion.addEventListener("click", () => {
          showCards("promocion");
        });

        // Mostrar las cards de la categoría "Oficina" por defecto
        showCards("oficina");
      });
    </script>
    

</body>
</html>