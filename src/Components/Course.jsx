import Content from "./Content"
import Header from "./Header"
const Course = ({course}) => {




    return (
    <div>
        {/* The prop position is used to keep track of the position of course in object */}
        <Header course={course} position= {0} />
        <Content course={course} position={0} />
        <Header course={course} position={1} />
        <Content course={course} position={1} />

    </div>)
}


export default Course