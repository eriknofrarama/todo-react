import { useState } from "react";
import CreateUpdateTodo from "../layouts/CreateUpdateTodo";
import ListTodo from "../layouts/ListTodo";

const TodoPage = () => {
    const [todos, setTodo] = useState([
        {
            title: "Memancing",
            isDone: false
        }
    ]);

    const [indexEdit, setIndexEdit] = useState(null);
  return (
    <>
      <CreateUpdateTodo todos={todos} setTodo={setTodo} indexEdit={indexEdit} setIndexEdit={setIndexEdit} />
      <ListTodo todos={todos} setTodo={setTodo} indexEdit={indexEdit} setIndexEdit={setIndexEdit} />
    </>
  );
};

export default TodoPage;
