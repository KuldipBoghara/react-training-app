import useFFetch from '../hooks/useFFetch';

function CustomeHookEx1() {
  const { data, loading, error } = useFFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h4>Eroor: {error}</h4>;
  }

  return (
    <div>
      {data.map((post, index) => (
        <h3 key={post.id} className="mb-3">
          {index + 1} {post.title}
        </h3>
      ))}
    </div>
  );
}

export default CustomeHookEx1;
