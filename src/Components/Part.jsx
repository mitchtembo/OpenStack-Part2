import Course from "./Course";

const Part = (props) => {
    console.log("Part Component hhhhhh", props.course[props.position])
const position = props.position
const {course} = props;
const partsArray = course[position].parts
console.log("PartsArray",partsArray)
const initialValue = 0;


const exercisesArr = partsArray.map(part => part.exercises);
console.log(exercisesArr)
const total = exercisesArr.reduce((accumulator,currentValue) => accumulator + currentValue , initialValue)
console.log("total", total)
//console.log(parts)

const results = partsArray.map(part => <div key={part.id}>{part.name} {part.exercises}</div>)
console.log(results)

    return(
        <div>
            {results}

            <p>total of {total} exercises</p>
            
        </div>
    )
}

export default Part;