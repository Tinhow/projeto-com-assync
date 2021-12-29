async function loadImagens() {
  const response = await fetch('js/model/dataset.json');

  const imagens = await response.json();

  for (const imagem of imagens) {
    createImageView(imagem);
  }
}

function createImageView(imagem) {
  const imageView = `
        <div class="card-image col-sm-6 col-lg-4 col-xl-3 mb-3" id="image-${imagem.id}">
          <div class="card">
            <div class="card-header text-center font-weight-bold">
              <span class="image-name">
                ${imagem.name}
              </span>
            </div>
            <div class="card-body p-0">
              <img src="${imagem.image}" alt="${imagem.name}" class="image-image width="150" height="167"">
            </div>
          </div>
        </div>
      `;

  const imageDeck = document.querySelector('.card-deck');

  imageDeck.insertAdjacentHTML('beforeend', imageView);
}

loadImagens();
