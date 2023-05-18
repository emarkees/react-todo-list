import Header from "./Header";
import TodosLogic from "./TodosLogic";

const TodoApp =  () => {
  return ( 
    <div className="container">
      <Header />
      <TodosLogic />
    </div>
  );
};

export default TodoApp ;