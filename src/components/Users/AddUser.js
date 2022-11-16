import React from "react";

function AddUser(props) {
  const addUserHandler = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      {" "}
      {/* form이 제출 되었을 때 실행되어야 하는 함수 추가 */}
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;
