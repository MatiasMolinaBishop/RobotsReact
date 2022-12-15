function Scroll(props){
    return(
        <div style={{overflow: 'scroll', border: '1px solid black', height: '600px', width: '100vw'}}>
            {props.children}
        </div>
    )
}

export default Scroll