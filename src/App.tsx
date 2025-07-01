import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, type PostType } from './components/Post'

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/joseairtonneto.png',
      name: 'José Airton Neto',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return,evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-06-29 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/joseairtonneto.png',
      name: 'Airton',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return,evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-06-29 22:00:00'),
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </>
  )
}
