import { ReactNode } from "react";


interface Props{
    children: ReactNode;
}


const Content = ({children} : Props) => {
  return (
    <body style={{backgroundColor: '#86b9b0', display: "flex"}}>
        {children}
    </body>
  )
}

export default Content