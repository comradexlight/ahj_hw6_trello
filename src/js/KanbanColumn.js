import KanbanCard from './KanbanCard';

export default class KanbanColumn {
    constructor(element) {
	  if (typeof element === 'string') {
        element = document.querySelector(element);
      }
    this._element = element;
	this.cards = Array.from(this._element.querySelectorAll('.card')).forEach((card) => new KanbanCard(card));
  }
  addCard(card) {
    this.cards.push(card);
  }

  deleteCard(cardIndex) {
    this.cards.splice(cardIndex, 1);
  }
}
