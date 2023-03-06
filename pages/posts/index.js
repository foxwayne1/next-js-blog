import AllPosts from '../../components/posts/all-posts'

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-03-01',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-03-02',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-03-03',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-03-04',
  },
]

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage
