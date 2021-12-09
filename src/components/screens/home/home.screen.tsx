import { Link } from 'react-router-dom';

export const HomeScreen = () => {
  return (
    <>
      <h1>Home Screen</h1>

      <Link to='/'> Home </Link>
      <Link to='/about'>About </Link>
      <Link to='/discoverproblems'> Discover Problems</Link>
      <Link to='/discoversolutions'>Discover Soluions </Link>

      <section>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, mollitia quidem. Nam nihil dolores beatae
        eos repudiandae, maiores corporis dignissimos reprehenderit, suscipit dolorum cumque blanditiis cupiditate
        delectus earum deserunt fugit libero voluptatem? Amet neque beatae dolorem dicta porro, officiis qui totam
        itaque ducimus, molestias tenetur incidunt magnam quisquam magni natus aperiam at assumenda pariatur dolorum
        nesciunt. Quam amet ad eveniet eos explicabo odio recusandae excepturi nostrum sit esse ex delectus iusto
        temporibus repudiandae cum harum quod sint deleniti sapiente nihil corporis eum, cumque omnis fuga! Rem,
        quibusdam deserunt? Voluptate architecto odit fuga hic ipsum voluptatibus tempore corporis amet laborum illo.
      </section>
    </>
  );
};
