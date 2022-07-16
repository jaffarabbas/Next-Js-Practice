import React from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blog}>
          <h1>Popular Blog</h1>
          <Link href={'/blogspot/Maintaining-Nextjs-App'}>
            <div className="blogcontainer">
              <h3>Maintaining Nextjs App</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum commodi labore molestiae, optio tempora laboriosam. Voluptatem soluta vitae ipsum quam repellendus quo repellat ducimus quibusdam! Eos cumque voluptatem natus eius.</p>
            </div>
          </Link>
          <div className="blogcontainer">
            <h3>Maintaining Nextjs App</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum commodi labore molestiae, optio tempora laboriosam. Voluptatem soluta vitae ipsum quam repellendus quo repellat ducimus quibusdam! Eos cumque voluptatem natus eius.</p>
          </div>
          <div className="blogcontainer">
            <h3>Maintaining Nextjs App</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum commodi labore molestiae, optio tempora laboriosam. Voluptatem soluta vitae ipsum quam repellendus quo repellat ducimus quibusdam! Eos cumque voluptatem natus eius.</p>
          </div><div className="blogcontainer">
            <h3>Maintaining Nextjs App</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum commodi labore molestiae, optio tempora laboriosam. Voluptatem soluta vitae ipsum quam repellendus quo repellat ducimus quibusdam! Eos cumque voluptatem natus eius.</p>
          </div><div className="blogcontainer">
            <h3>Maintaining Nextjs App</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum commodi labore molestiae, optio tempora laboriosam. Voluptatem soluta vitae ipsum quam repellendus quo repellat ducimus quibusdam! Eos cumque voluptatem natus eius.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Blog