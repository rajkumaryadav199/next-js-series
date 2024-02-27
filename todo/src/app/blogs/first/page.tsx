import { Metadata } from "next"

export const metadata:Metadata={
  title:{
    absolute:'Blog - mycode'
  }
}

const FirstBlogs = () => {
  return (
    <div>
      <h1>First blogs</h1>
      <h3>Page.tsx</h3>
      <h3>Layout.tsx</h3>
      <h3>template.tsx</h3>
      <h3>loading.tsx</h3>
      <li>
        <ol>You can display the loading state as soon as navigate to the new route</ol>
        <ol>The immediate feedback reassures users that their action has been acknowledge reduces perceived loading and make the application feel more responsive.</ol>
        <ol>Next.js alowes the creation of shared layout that remain interactive while new route segment are loading</ol>
      </li>
    </div>
  )
}

export default FirstBlogs
