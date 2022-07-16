import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const slug = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>Title : {slug}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, recusandae. Voluptatibus quasi maxime pariatur eum ea quas id rerum quaerat illo. Nesciunt libero ad beatae aliquid amet non tempore ea.</p>
                </main>
            </div>
        </>
    )
}

export default slug