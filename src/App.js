import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    // 상태 끌어올리기
    setUsersList(prevUsersList => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    }); // 이전 상태에 의존해서 상태를 업데이트 할 때는 setUsersList의 대체 폼을 사용한다.
  };

  return (
    // <></> 로 사용해도 되지만 빌드 워크플로가 지원하지 않으면 작동되지 않을수도 있다. => 프로젝트 설정에 따라 다른다.
    <React.Fragment>
      {" "}
      {/* React를 import 했으면 항상 작동한다. => 혹은 Fragment를 직접 import해도 된다. */}
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
