import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'posts')

function getPostsData(fileName) {
  const filePath = path.join(postDirectory, fileName)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const postSlug = fileName.replace(/\.md$/, '')

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  }

  return postData
}

export function getAllPosts() {
  const postsFiles = fs.readdirSync(postDirectory)

  const allPosts = postsFiles.map(postFile => {
    return getPostsData(postFile)
  })

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB ? -1 : 1
  )

  return sortedPosts
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()

  const featuredPosts = allPosts.filter(post => post.isFeatured)

  return featuredPosts
}
