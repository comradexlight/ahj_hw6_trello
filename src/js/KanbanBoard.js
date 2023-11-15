import KanbanColumn from './KanbanColumn';

export default class KanbanBoard {
    constructor(element) {
	  if (typeof element === 'string') {
        element = document.querySelector(element);
      }
    this._element = element;
	this.columns = this._element.querySelectorAll('.column').forEach((column) => new KanbanColumn(column));
	};
}