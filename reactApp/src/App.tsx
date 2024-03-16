import Navbar from "./components/Navbar";
import Content from "./components/Content";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Content>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example">
          <div style={{display: 'flex'}}>
            <h4 id="scrollspyHeading1"></h4>
            <ListGroup
              title="Project 1"
              text="this is my frist Project with React"
            ></ListGroup>
          </div>
          <div style={{display: 'flex'}}>
            <h4 id="scrollspyHeading2"></h4>
            <ListGroup

              title="Project 1"
              text="this is my frist Project with React"
            ></ListGroup>
          </div>
          <div style={{display: 'flex'}}>
            <h4 id="scrollspyHeading3"></h4>
            <ListGroup

              title="Project 1"
              text="this is my frist Project with React"
            ></ListGroup>
          </div>
          <div style={{display: 'flex'}}>
            <h4 id="scrollspyHeading4"></h4>
            <ListGroup

              title="Project 1"
              text="this is my frist Project with React"
            ></ListGroup>
          </div>
        </div>
      </Content>
    </div>
  );
}

export default App;

