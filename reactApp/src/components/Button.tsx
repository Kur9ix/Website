
interface Props{
    color? : 'primary' | 'dark' | 'light';
    children: string;
    onClick: () => void;
}


const Button = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button