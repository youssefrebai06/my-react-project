const courseTitle = "Modern React";

// Week 3: Fake Hacker News data (defined outside the component)
const stories = [
  {
    objectID: "1",
    title: "React 19 New Features Explained",
    url: "https://react.dev",
    author: "dan_abramov",
    points: 320,
    num_comments: 45
  },
  {
    objectID: "2",
    title: "Why Developers Love Vite",
    url: "https://vitejs.dev",
    author: "evan_you",
    points: 210,
    num_comments: 30
  }
];

function App() {
  const studentName = "Youssef";

  const student = {
    name: "Youssef",
    age: 19,
    track: "Frontend Development"
  };

  function sayHello() {
    return `Hi ${studentName}! Happy coding `;
  }

  return (
    <div>
      <h1>Youssef's React Playground</h1>

      {/* Week 2 content */}
      <p>Student name: {studentName}</p>
      <p>Current course: {courseTitle}</p>
      <p>{studentName} is learning {courseTitle} right now!</p>
      
      <label htmlFor="userInput">Type your name here:</label>
      <input type="text" id="userInput" />

      <h3>Student Info</h3>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <p>{sayHello()}</p>

      {/* Week 3: Hacker News Stories List */}
      <h2>Hacker News Stories</h2>
      <ul>
        {stories.map(story => (
          <li key={story.objectID}>
            <h3>
              <a href={story.url} target="_blank" rel="noopener noreferrer">
                {story.title}
              </a>
            </h3>
            <p>By: {story.author} | 👍 {story.points} | 💬 {story.num_comments}</p>
          </li>
        ))}
      </ul>

      {/*
      Week 2 Reflection:
      I understand well: how variables work in JSX with {}
      Still confusing: when to place variables outside components
      My mistake: forgetting to wrap elements inside one parent div
      
      Week 3 Reflection:
      map() is essential because it returns new JSX elements for each story
      objectID is the correct key because it's unique and stable
      When we replace with real API, data will come from fetch() instead
      */}
    </div>
  );
}

export default App;