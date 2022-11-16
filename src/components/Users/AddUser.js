import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = event => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    // useState에서 문자열로 설정해놨기 때문에 입력되는 값은 숫자가 아닌 문자열로 반환된다.
    if (+enteredAge < 1) {
      // +기호를 넣으면 입력된 나이값을 숫자형으로 바꿀 수 있다.
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  // input에 키 입력이 있을 때마다 작동하게 될 함수이다.
  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
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
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
