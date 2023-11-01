import {UserButton} from "@clerk/nextjs"
import {SearchInput} from "@/components/search-input"
const Root = () => {
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
    </div>
  )
}


export default Root;