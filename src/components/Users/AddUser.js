import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const addUserHandler = event => {
    event.preventDefault();
  };

  return (
    // <Card>는 내장된 html 컴포넌트가 아닌 사용자 지정 컴포넌트이기 때문에 컴포넌트 안에서 사용하는 props를 통해서만 작동할 수 있다.
    // className 속성이 html 태그의 속성과 같지 않고 props로 전달이 되는 것이다.
    // <Card>컴포넌트에서 className을 props로 받아서 class 이름으로 사용할 수 있다.
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        {" "}
        {/* form이 제출 되었을 때 실행되어야 하는 함수 추가 */}
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
