import { useEffect, useRef } from "react";

const CreateUpdateTodo = ({ todos, setTodo, indexEdit, setIndexEdit }) => {
  const input = useRef();
  const addTodo = () => {
    let currentInput = input.current.value;
    if (!currentInput) {
      alert("Data tidak boleh kosong");
      return;
    }
    setTodo([...todos, { title: currentInput, isDone: false }]);
    input.current.value = "";
  };

  const editTodo = () => {
    let currentInput = input.current.value;
    if (!currentInput) {
      alert("Data tidak boleh kosong");
      return;
    }
    const newTodos = todos;
    newTodos[indexEdit] = {
      title: currentInput,
      isDone: false,
    };
    setTodo(newTodos);
    input.current.value = "";
    setIndexEdit(null);
  };

  const handleTodo = () => {
    if (indexEdit === null) {
      addTodo();
    } else {
      editTodo();
    }
  };

  useEffect(() => {
    const currentTodo = todos.find((todo, index) => index === indexEdit);
    if(!currentTodo) {
      input.current.value = '';
    } else {
      input.current.value = currentTodo?.title;
    }
  }, [indexEdit]);

  return (
    <div className="mx-auto w-[300px] h-[100px] pt-[50px] bg-teal-600 text-center">
      <div className="flex justify-center gap-[20px]">
        <input ref={input} className="bg-white" type="text" />
        <button onClick={handleTodo} className="bg-blue-700">
          {indexEdit !== null ? "Edit" : "Tambah"}
        </button>
      </div>
    </div>
  );
};

export default CreateUpdateTodo;
