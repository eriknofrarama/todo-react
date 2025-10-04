const ListTodo = ({ todos, setTodo, setIndexEdit }) => {
  const deleteTodo = (currentIndex) => {
    const newTodo = todos.filter((todo, index) => index !== currentIndex);
    setTodo(newTodo);
  };

  const editTodo = (currentIndex) => {
    setIndexEdit(currentIndex);
  };

  // Fungsi baru untuk toggle status done/undone

  const toggleDone = (currentIndex) => {
    const newTodos = [...todos];
    newTodos[currentIndex].isDone = !newTodos[currentIndex].isDone;
    setTodo(newTodos);
  };

  return (
    <>
      <div className="w-[300px] h-[500px] bg-black mx-auto text-white">
        <ol className="ml-[20px]">
          {todos.map((todo, index) => {
            return (
              <li key={index} className="m-[20px] flex items-center gap-[10px]">
                {/*tampilkan teks dengan efek coret jika sudah done */}
                <span
                  className={`flex-1 ${
                    todo.isDone ? "line-through text-gray-400" : ""
                  }`}
                >
                  - {todo.title}
                </span>

                {/* ✅ tombol Done */}
                <button
                  onClick={() => toggleDone(index)}
                  className={`p-[5px] rounded ${
                    todo.isDone ? "bg-green-600" : "bg-gray-700"
                  }`}
                >
                  {todo.isDone ? "Undo" : "Done"}
                </button>

                <button
                  onClick={() => editTodo(index)}
                  className="bg-yellow-600 p-20px mr-[10px]"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  className="bg-red-600 p-20px"
                >
                  Hapus
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default ListTodo;
