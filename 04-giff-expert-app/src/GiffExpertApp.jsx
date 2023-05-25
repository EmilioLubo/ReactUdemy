import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GiffExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (value) => {
        setCategories([...categories, value])
    }

  return (
    <>
        <h1>GiffExpertApp</h1>

        <AddCategory onNewValue={onAddCategory} />

        <ol>
            {categories.map(e => {
                return <li key={e}>{e}</li>
            })}
        </ol>
    </>
  )
}