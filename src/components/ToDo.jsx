import ButtonsToDo from './ButtonsToDo';

const ToDo = () => {
  return <li>
  <input className="toggle" type="checkbox" />
  <label>
    <span className="description">Учить React 4 часа</span>
    <span className="created">создана 3 дня назад</span>
  </label>
  <ButtonsToDo />
</li>
};

export default ToDo;
