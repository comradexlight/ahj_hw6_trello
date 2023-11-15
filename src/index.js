import KanbanBoard from './js/KanbanBoard';
import './css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const kanbanBoard = new KanbanBoard(document.querySelector('.board'));
  console.log(kanbanBoard.columns);
});


