import { Post } from './Post'

export function App() {
  return (
    <>
      <Post
        author='José Airton'
        content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni dolor rem necessitatibus quos reiciendis minima odit quidem cum illum. Dolores assumenda nisi itaque in ad fugit quaerat reiciendis dolore quidem.'
      />
      <Post author='Bob' content='Outro post' />
      <Post />
      <Post />
      <Post />
    </>
  )
}
