import { Routes, Route } from 'react-router-dom';
// import Todo from '../compoent/Todo/Todo';
// import News from '../compoent/News/News';
// import Weather from '../compoent/Weather/Weather';
// import Movie from '../compoent/Movie/Movie';
import Login from '../compoent/Login/Login';
import Register from '../compoent/Register/Register';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/"   element={<Login/>} />
        <Route path="/register"  element={<Register/>} />
        {/* <Route path="/user"  element={<Todo/>} />
        <Route path="/friends"  element={<News/>} />
        <Route path="/chat"  element={<Weather/>} />
        <Route path="/option"  element={<Movie/>} /> */}
      </Routes>
    </div>
  );
};

export default Routing;