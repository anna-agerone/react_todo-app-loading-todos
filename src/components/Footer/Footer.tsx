import classNames from 'classnames';
import { FilterStatus } from '../../types/FilterStatus';
import { Todo } from '../../types/Todo';

type Props = {
  filter: string;
  setFilter: (status: FilterStatus) => void;
  todos: Todo[];
};

export const Footer: React.FC<Props> = ({ filter, setFilter, todos }) => {
  const activeTodosFiltered = todos.filter((todo: Todo) => !todo.completed);
  const completedTodosFiltered = todos.filter((todo: Todo) => todo.completed);

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${activeTodosFiltered.length} items left`}
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        {Object.values(FilterStatus).map((status: FilterStatus) => (
          <a
            key={status}
            href="#/"
            className={classNames('filter__link', {
              selected: filter === status,
            })}
            data-cy={`FilterLink${status}`}
            onClick={() => setFilter(status)}
          >
            {status}
          </a>
        ))}
      </nav>

      {/* this button should be disabled if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={!completedTodosFiltered.length}
      >
        Clear completed
      </button>
    </footer>
  );
};
