import React, { useRef } from 'react';

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = 'Kuldip';
    inputRef.current.style.backgroundColor = 'yellow';

    paraRef.current.innerText = 'Hello';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="input form-control mb-2"
        ></input>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}></p>
      </form>
    </div>
  );
}

export default UseRefExample1;
