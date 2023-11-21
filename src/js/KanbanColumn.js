import KanbanCard from './KanbanCard';

export default class KanbanColumn {
    constructor(element) {
	  if (typeof element === 'string') {
        element = document.querySelector(element);
      }
    this._element = element;
  }
}
