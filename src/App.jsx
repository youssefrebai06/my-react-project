const courseTitle = "Modern React";

function App() {
  const studentName = "Youssef";

  const student = {
    name: "Youssef",
    age: 17,
    track: "Frontend Development"
  };

  function sayHello() {
    return `Hi ${studentName}! Happy coding 🚀`;
  }

  return (
    <div>
      <h1>🚀 Youssef’s React Playground</h1>

      <p>Student name: {studentName}</p>

      <p>Current course: {courseTitle}</p>

      <p>
        {studentName} is learning {courseTitle} right now!
      </p>

      <label htmlFor="userInput">Type your name here:</label>
      <input type="text" id="userInput" />

      <h3>Student Info</h3>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <p>{sayHello()}</p>

      {/*
      I understand well: how variables work in JSX with {}
      Still confusing: when to place variables outside components
      My mistake: forgetting to wrap elements inside one parent div
      */}
    </div>
  );
}

export default App;
