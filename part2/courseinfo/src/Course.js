const Header = ({ course }) => <h1>{course}</h1>

const Total = ({parts}) => <b>total of {parts.reduce(function (acc,obj) {return acc + obj.exercises},0)} exercises</b>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
    parts.map(elem => <Part part={elem}/>)

const Course = (props) => {
  const {course} = props
  return (
    <div>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
    </div>
  )
}

export default Course