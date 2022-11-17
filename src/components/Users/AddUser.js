import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = event => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values.)",
      });
      return;
    }

    // useState에서 문자열로 설정해놨기 때문에 입력되는 값은 숫자가 아닌 문자열로 반환된다.
    if (+enteredUserAge < 1) {
      // +기호를 넣으면 입력된 나이값을 숫자형으로 바꿀 수 있다.
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {" "}
      {/* div 대신 감싸는 용도로만 사용하는 Wrapper 컴포넌트로 감싸준다. */}
      {/* 연습으로 Wrapper 컴포넌트를 만들어 감싸줬지만 실제로는 이 방식으로 하지 않는다. => React.Fragment, <></> 사용 */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {/* <Card>는 내장된 html 컴포넌트가 아닌 사용자 지정 컴포넌트이기 때문에 컴포넌트 안에서 사용하는 props를 통해서만 작동할 수 있다. */}
      {/* className 속성이 html 태그의 속성과 같지 않고 props로 전달이 되는 것이다. */}
      {/* <Card>컴포넌트에서 className을 props로 받아서 class 이름으로 사용할 수 있다. */}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          {" "}
          {/* form이 제출 되었을 때 실행되어야 하는 함수 추가 */}
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
