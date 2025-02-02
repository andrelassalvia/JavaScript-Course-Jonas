import icons from 'url:../../img/icons.svg';
import View from './view';

class ResultsView extends View {
  _primaryElement = document.querySelector('.results');

  _generateMarkup() {
    this._data.forEach(recipe => {
      const markup = `
      <li class="preview">
        <a class="preview__link preview__link--active" href="#${recipe.id}">
          <figure class="preview__fig">
            <img src="${recipe.image}" alt="${recipe.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${recipe.title}</h4>
            <p class="preview__publisher">${recipe.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;

      this._primaryElement.insertAdjacentHTML('afterbegin', markup);
    });
  }
}

export default new ResultsView();
