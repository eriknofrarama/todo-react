import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const fetchData = async() => {
    const dataJson = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = dataJson.json();
    return data;
  }

  // Mounting
  useEffect(() => {
    console.log("Komponen ini melakukan load terhadap mounting");
    fetchData();
    

    // Unmounting / Cleaner
    return () => {
      console.log("Komponen ini melakukan load terhadap unmounting");
    };
  }, []);

  // Updating
  useEffect(() => {
    console.log("Komponen ini melakukan load terhadap updating");
  }, [count]);

  function increament(event) {
    event.stopPropagation();
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  const ketimpa = () => {
    console.log('Ketimpa')
  }

  return (
    <div onClick={ketimpa} className="w-[200px] h-[200px] text-center pt-[80px] bg-teal-700 text-[50px] m-auto text-white">
      {count}
      <button
        onClick={increament}
        className="px-[20px] mb-[30px] bg-gray-700 text-white w-[100%]"
      >
        Tambah
      </button>
      <button
        onClick={decrement}
        className="px-[20px] bg-red-700 text-white w-[100%]"
      >
        Kurang
      </button>
    </div>
  );
}

export default Counter;
