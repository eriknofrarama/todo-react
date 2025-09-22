const ListTodo = ({ todos, setTodo, setIndexEdit }) => {
  const deleteTodo = (currentIndex) => {
    const newTodo = todos.filter((todo, index) => index !== currentIndex);
    setTodo(newTodo);
  };


  const editTodo = (currentIndex) => {
    setIndexEdit(currentIndex);
  }

  return (
    <>
      <div className="w-[300px] h-[500px] bg-black mx-auto text-white">
        <ol className="ml-[20px]">
          {todos.map((todo, index) => {
            return (
              <li key={index} className="m-[20px]">
                - {todo.title}{" "}
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
