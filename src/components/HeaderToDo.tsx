import NextToDo from "./NextToDo";
import ToDo from "./ToDo"

const HeaderToDo = () => {
    return (
        <><NextToDo />
            <ul className="todo-list">
                <ToDo />
                <ToDo />
                <ToDo />
            </ul></>)
};

export default HeaderToDo