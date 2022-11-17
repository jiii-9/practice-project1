import React from "react";
import ReactDOM from "react-dom"; // 포털을 사용하기 위해 'react-dom'을 추가한다.

import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
}

function ModalOverlay(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {/* createPortal의 첫 번째 인자로는 렌더링되어야 하는 리액트의 노드이다. */}
      {/* 렌더링하려는 컴포넌트로 prop을 전달해줄 수 있다. */}
      {/* ErrorModal에서 onClick을 설정하고 onConfirm prop에서 얻은 함수를 Backdrop 컴포넌트 내부의 onClick prop으로 전달해준다. */}
      {/* createPortal의 두 번째 인수는 pointer이다. => 요소가 렌더링되어야 하는 실제 DOM의 컨터이너를 가리킨다. */}
      {/* 이 때 문자열로 id의 이름을 적으면 안되고, DOM API를 이용해야 한다. => document.getElementById */}

      {/* portal은 렌더링된 HTML 내용을 다른 곳으로 옮겨주는 것이 핵심이다. */}
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
