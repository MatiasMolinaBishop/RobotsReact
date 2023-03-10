import Card from "./Card"

function CardList({robots}){

    const cardArray = robots.map((robot, i) => {
        return(
            <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        )
    })

    return(
        <div>
            {cardArray}
        </div>
        
    )
}

export default CardList