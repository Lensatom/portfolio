import { Container, Line, Typography } from '../../components'
import Blog from './components/Blog'
import BlogsData from './data/BlogsData.json'
import BlogsImage from '../../assets/blogs.jpg'

const Blogs = () => {

  return (
    <Container className="pt-16 lg:pt-24 pb-10 flex flex-col !gap-6">
      <div className="h-24 lg:h-44 mt-4 w-full overflow-hidden flex items-center">
        <img src={BlogsImage} alt="contact image" />
      </div>
      <Typography variant="head">Blogs</Typography>
      <Line />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {BlogsData.map((blog) => {
          return (
            <Blog
              title={blog.title}
              datePublished={blog.datePublished}
              body={blog.body}
              link={blog.link}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default Blogs