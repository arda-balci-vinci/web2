interface FooterProps {
     urlLogo: string;
    children:React.ReactNode;
}

const Footer =(props:FooterProps) =>{
    return(
      <footer className="header">
        <img src={props.urlLogo} alt="logo" className="logo"/>
        <div>{props.children}</div>
      </footer>

    )
}


export default Footer;