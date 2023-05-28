import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GiffExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (value) => {
        if (categories.includes(value.toLowerCase())) 
            return
        setCategories([...categories, value.toLowerCase()])
    }

  return (
    <>
        <h1>GiffExpertApp</h1>

        <AddCategory onNewValue={onAddCategory} />

        
        {categories.map(e => 
            (
                <GifGrid key={e} category={e}/>
            )
        )}
        
    </>
  )
}