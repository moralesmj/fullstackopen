const Header = ({ course }) => <h1>{course.name}</h1>

const Content = ({ parts }) => (
    parts.map(part =>
        <Part
            key={part.id}
            name={part.name}
            exercises={part.exercises}
        />
    )
)

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Total = ({ total }) => <b>total of {total} exercises</b>

const Course = ({ courses }) => {
    
    return (
        <>
            {courses.map(course => {
                const total = course.parts.reduce(
                    (counter, value) => counter + value.exercises, 0
                )

                return (
                    <div key={course.id}>
                        <Header course={course} />
                        <Content parts={course.parts} />
                        <Total total={total}/>
                    </div>
                )
            })}
        </>
    )
}

export default Course