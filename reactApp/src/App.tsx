import Navbar from "./components/Navbar";
import Content from "./components/Content";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Content>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example">
          <h4 id="scrollspyHeading1"></h4>
          <ListGroup
            img="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=1200,height=675,fit=contain,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe"
            title="Project 1"
            text="this is my frist Project with React"
          ></ListGroup>
          <h4 id="scrollspyHeading2"></h4>
          <ListGroup
            img="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=1200,height=675,fit=contain,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe"
            title="Project 1"
            text="this is my frist Project with React"
          ></ListGroup>
          <h4 id="scrollspyHeading3"></h4>
          <ListGroup
            img="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=1200,height=675,fit=contain,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe"
            title="Project 1"
            text="this is my frist Project with React"
          ></ListGroup>
          <h4 id="scrollspyHeading4"></h4>
          <ListGroup
            img="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=1200,height=675,fit=contain,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe"
            title="Project 1"
            text="this is my frist Project with React"
          ></ListGroup>
          <h4 id="scrollspyHeading5"></h4>
          <ListGroup
            img="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=1200,height=675,fit=contain,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe"
            title="Project 1"
            text="this is my frist Project with React"
          ></ListGroup>
        </div>
      </Content>
    </div>
  );
}

export default App;

