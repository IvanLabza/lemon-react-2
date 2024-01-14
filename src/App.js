import Desc from "./componet/Desc/Desc.jsx";
import Form from "./componet/Form/Form.jsx";
import Header from "./componet/Header/Header.jsx";
import Hero from "./componet/Hero/Hero.jsx";
import Router from "./componet/Router/Router.jsx";
import Servise from "./componet/Servise/Servise.jsx";
import Team from "./componet/Team/Team.jsx";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Hero></Hero>
      <Servise></Servise>
      <Desc></Desc>
      <Team></Team>
      <Form></Form>
      <Router></Router>
    </div>
  );
}

export default App;
