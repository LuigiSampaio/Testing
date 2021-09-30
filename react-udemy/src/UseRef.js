import P from 'prop-types';
import { useEffect, useState, useMemo, useRef } from 'react';
import './App.css';

const Post = ({ post, handleClick }) => {
  console.log('Filho Renderizou !!!');
  return (
    <div key={post.id} className="post">
      <h1 style={{ fontSize: '22px' }} onClick={() => handleClick(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

export const UseRef = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);

  console.log('Pai Renderizou !!!');

  // Component Did Mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <p>
        <input
          ref={input}
          style={{ width: '80%', padding: '12px 20px' }}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
};
