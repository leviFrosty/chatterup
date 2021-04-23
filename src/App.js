import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/chatFeed";
import "./app.css";
import LoginForm from "./components/loginForm";

const App = () => {
  // Yes, this auth isn't secure.
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_CHATID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
