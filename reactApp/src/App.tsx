import Navbar from "./components/Navbar";
import Content from "./components/Content";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Content>
        <ListGroup
          img="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=1200,height=675,fit=contain,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe"
          title="Project 1"
          text="this is my frist Project with React"
        ></ListGroup>
        <ListGroup
          img="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=1200,height=675,fit=contain,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe"
          title="Project 1"
          text="this is my frist Project with React"
        ></ListGroup>
        <ListGroup
          img="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=1200,height=675,fit=contain,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe"
          title="Project 1"
          text="this is my frist Project with React"
        ></ListGroup>
        <ListGroup
          img="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=1200,height=675,fit=contain,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe"
          title="Project 1"
          text="this is my frist Project with React"
        ></ListGroup>
      </Content>
    </div>
  );
}

export default App;
