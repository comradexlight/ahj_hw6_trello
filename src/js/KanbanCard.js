export default class KanbanCard {
 constructor(element) {
	  if (typeof element === 'string') {
        element = document.querySelector(element);
      }
    this._element = element;
 }
}
