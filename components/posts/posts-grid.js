import PostItem from './post-item'
import classes from './posts-grid.module.css'

const PostsGrid = props => {
  const { posts } = props

  if (!posts) {
    return (
      <div>
        <h1>Nothing to show currently</h1>
      </div>
    )
  }

  return (
    <ul className={classes.grid}>
      {posts.map(post => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  )
}

export default PostsGrid
