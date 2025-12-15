const posts = [
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
  { id: 3, title: "post three" },
];
//Way 1
// export const getPosts = () => posts;

const getPosts = () => posts;

export const getPostLength = () => posts.length;
//Way 2
export default getPosts;
