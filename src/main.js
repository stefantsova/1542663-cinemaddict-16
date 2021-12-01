import { createProfileRatingTemplate } from './view/profile-rating-view.js';
import { createSiteMenuTemplate } from './view/site-menu-view.js';
import { createFilmListTemplate } from './view/film-list-view.js';
import { createMovieCardTemplate } from './view/movie-card-view.js';
import { createShowMoreButtonTemplate } from './view/show-more-button-view.js';
import { createStatsTemplate } from './view/stats-view.js';
import {createPopupTemplate} from './view/more-info-popup-view.js';

const TASK_COUNT = 5;

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

renderTemplate(siteHeaderElement, createProfileRatingTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(siteFooterElement, createStatsTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilmListTemplate(), RenderPosition.BEFOREEND);

const filmsSectionElement = siteMainElement.querySelector('.films');

renderTemplate(filmsSectionElement, createShowMoreButtonTemplate(), RenderPosition.BEFOREEND);

const filmsListElement = filmsSectionElement.querySelector('.films-list__container');

for (let i = 0; i < TASK_COUNT; i++) {
  renderTemplate(filmsListElement, createMovieCardTemplate(), RenderPosition.BEFOREEND);
}

renderTemplate(siteBodyElement, createPopupTemplate(), RenderPosition.BEFOREEND);
