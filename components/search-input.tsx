"use client"

import qs from "query-string"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { ChangeEventHandler, useState, useEffect } from "react"
import { useDebounce } from "@/hooks/use-debounce"

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams()

  const catergoryId = searchParams.get("catergoryId")
  const name = searchParams.get("name")


  const [value, setValue] = useState(name || "")


  // When we are going to query our database it will only be triggered when the user stops typing for 500ms not every single time we stroke a keyword
  const debouncedValue = useDebounce<string>(value, 500)

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)

  }

  // We are going to use the useEffect hook to update the url when the user types in the search input
  useEffect(() => {

    // we are going to use te cateegoryId and debouncedValue to update the url 
    const query = {
      catergoryId,
      name: debouncedValue
    }
    // We are going to use the qs library to stringify our url
    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipEmptyString: true, skipNull: true }) //skipEmtyString and skipNull will remove the empty query params from the url

    router.push(url)
  }, [debouncedValue, router, catergoryId])

  return (
    <div className="relative">
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input
      onChange={onChange}
      value={value}
        placeholder="Search..."
        className="pl-10 bg-primary/10"
      />
    </div>
  )
}