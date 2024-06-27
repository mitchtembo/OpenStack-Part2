const Header = (props) => {



    //console.log("Header",props.course[0].name)

    const headers = props.course.map(course => course.name)
    console.log("props",props.position)
   // console.log(headers)

return(
    <div>
        <h1 position={props.position}>{headers[props.position]}</h1>
    </div>
)

}



export default Header;