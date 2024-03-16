import FolderObject from "./Folder";

interface Props{
    title: string;
    text: string

}


const ListGroup = ({title, text} : Props) => {
    return (
        <>
        <div className="card" style={{ width: " 400px", marginLeft:"40px",  paddingTop: "40px", backgroundColor: "#86b9b0", borderStyle: "none"}}>
            <FolderObject></FolderObject>

            <div className="card-body" style={{backgroundColor:"#ffffff", maxHeight: "100px"}}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
      </> 
        
    )
}

export default ListGroup