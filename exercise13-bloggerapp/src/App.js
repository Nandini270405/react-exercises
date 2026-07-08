import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const books = [
    { title: 'Atomic Habits', author: 'James Clear' },
    { title: 'The Alchemist', author: 'Paulo Coelho' }
  ];

  const blogs = [
    { title: 'Learning React', author: 'Nandini' },
    { title: 'ES6 Features', author: 'Nandini' }
  ];

  const courses = []; // empty on purpose to demonstrate the "no data" branch

  return (
    <div>
      <h1>Blogger App</h1>
      <BookDetails books={books} />
      <BlogDetails blogs={blogs} />
      <CourseDetails courses={courses} />
    </div>
  );
}

export default App;