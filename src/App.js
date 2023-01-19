import {Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import PostDetail from './components/pages/PostDetail';
import CreatePost from './components/pages/CreatePost';
import EditPost from './components/pages/EditPost';
import './App.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/blog/posts/:postId" element={ <PostDetail/> } />
        <Route path="/blog/posts/:postId/edit" element={ <EditPost/> } />
        <Route path="/blog/posts/create" element={ <CreatePost/> } />
      </Routes>
    </div>
  );
}

export default App;
