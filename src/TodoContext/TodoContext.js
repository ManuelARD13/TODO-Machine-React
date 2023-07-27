import React, { useState, useEffect } from 'react'
import useLocalstorage from '../components/useLocalstorage.js';
const TODOCTX = React.createContext()

const TODOProvider = ({children}) => {
  const [searchValue, setSearchValue] = useState("")
  const { items: TODOs, saveItems: saveTODOs, loading, error } = useLocalstorage("TODOs_V1", [])
  const [noTODOs, setNoTODOs] = useState(false)
  const [ openModal, setOpenModal ] = useState(false)

  let filteredTODOs = TODOs.filter(
    TODO => {
      const TODOText = TODO.text.toLocaleLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      return TODOText.includes(searchText)                  }
  )

  let completedTODOs = TODOs.filter(TODO => TODO.completed).length

  
  
  const completeTODO = (text) => {
    const newTODOs = [...TODOs]
    const TODOIndex = newTODOs.findIndex( (TODO) => TODO.text === text)
    const TODO = newTODOs[TODOIndex]
    if(TODO.completed){
      TODO.completed = false
    } else {
      TODO.completed = true
    }
    saveTODOs(newTODOs)
  }

  const deleteTODO = (text) => {
    const newTODOs = [...TODOs]
    const remaningTODOs = newTODOs.filter((TODO) => TODO.text !== text)
    saveTODOs(remaningTODOs)
  } 

  useEffect(() => {
    if(completedTODOs === TODOs.length){
      setNoTODOs(true)
    } else {
      setNoTODOs(false)
    }
  }, [completedTODOs, TODOs])
  
  return(
    <TODOCTX.Provider value={{
      loading,
      error, 
      searchValue, 
      setSearchValue, 
      completedTODOs, 
      noTODOs, 
      completeTODO, 
      deleteTODO, 
      TODOs,
      saveTODOs,
      filteredTODOs,
      openModal,
      setOpenModal
    }}>
      {children}
    </TODOCTX.Provider>
  )
}

export { TODOCTX, TODOProvider }