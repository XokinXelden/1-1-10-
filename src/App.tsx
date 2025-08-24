import ToDo from './components/ToDo';
import FooterToDo from './components/FooterToDo';

function App() {
  return (
    <div className="todoapp">
      <h1>Задачи</h1>
      <section>
        <input className="todo-input" placeholder="Что должно быть сделано?" />

        <ul className="todo-list">
          <ToDo />
          <ToDo />
          <ToDo />
        </ul>
        <FooterToDo />
      </section>
    </div>
  );
}

export default App;
