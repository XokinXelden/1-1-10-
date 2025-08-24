import HeaderToDo from './components/HeaderToDo'
import FooterToDo from './components/FooterToDo'


function App() {
  return (
    <div className="todoapp">
      <h1>Задачи</h1>
      <section>
        <HeaderToDo />
        <FooterToDo />
      </section>
    </div>
  );
}

export default App;
