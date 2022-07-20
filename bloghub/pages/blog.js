import React from 'react'
import { useEffect , useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/api/blogs').then((allData)=>{
      return allData.json();
    }).then((blog) => {
      setBlog(blog);
    });
  },[]);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blog}>
          <h1>Popular Blog</h1>
          {
            blog.map((blog) => {
               return <Link href={`/blogspot/${blog.slug}`} key={blog.title}>
               <div className="blogcontainer">
                 <h3>{blog.title}</h3>
                 <p>{blog.description.substr(0,100)}...</p>
               </div>
             </Link> 
            })
          }
        </div>
      </main>
    </div>
  )
}

export default Blog