function CopyRight(){

    let year = new Date()
    let todayYear = year.getFullYear()

    return(
        <div>
            <p> © {todayYear}</p>
        </div>
    )
}

export default CopyRight