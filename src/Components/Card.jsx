function Card(props){
    return (
        <div className = 'bg-light-blue dib br3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${props.id}`} alt="robotImg"/>
            <div>
                <h2>
                    {props.name}
                </h2>
                <p>
                    {props.email}
                </p>
            </div>
        </div>
    )
}

export default Card