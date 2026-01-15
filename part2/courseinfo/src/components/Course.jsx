const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
    <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
        <Part part={props.parts[3]} />
    </div>
)

const Part = (props) => (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
)

const Total = (props) => <b>total of {props.total} exercises</b>

const Course = ({ course }) => {
    const total = course.parts.reduce(
        (counter, value) => counter + value.exercises, 0
    )

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total total={total}/>
        </div>
    )
}

export default Course