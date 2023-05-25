import { useState } from "react"

export const AddCategory = ({onNewValue}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let newValue = inputValue.trim()
        if (newValue.length <= 1) return;
        onNewValue(newValue)
        setinputValue('')
    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
