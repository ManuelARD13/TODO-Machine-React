import React from "react";
import { createPortal } from "react-dom";
import "../../styles/TodoModal.css"

function TodoModal ({ children }) {
  return (
    createPortal(
      <div className="modal">
        {children}
      </div>,
      document.getElementById("modal")
    )
  )
}

export { TodoModal }