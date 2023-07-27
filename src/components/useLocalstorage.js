import { useState, useEffect } from "react"

export default function useLocalstorage(itemName, initialValue) {

  const [items, setItems] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      try {

        const localStorageItems = localStorage.getItem(itemName)

        if (localStorageItems) {
          let parsedItems = JSON.parse(localStorageItems)
          setItems(parsedItems)
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
        }
      }
      catch (error) {
        setLoading(false)
        setError(true)
        alert("Oops, something went wrong!")
        throw new Error(error)
      }
      setLoading(false)
    }, 2000)

  }, [initialValue, itemName])





  const saveItems = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItems(newItem)
  }

  return { items, saveItems, loading, error }

}