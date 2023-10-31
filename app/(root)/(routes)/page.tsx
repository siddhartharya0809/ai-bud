import {UserButton} from "@clerk/nextjs"

const Root = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}


export default Root;