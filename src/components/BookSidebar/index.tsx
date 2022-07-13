import React from 'react'
import './styles.scss'

type SidebarT = {
  toggleSidebar: (val: boolean) => void
  isOpen: boolean
}

const BookSidebar = ({ toggleSidebar, isOpen }: SidebarT) => {
  return <div className={`book-sidebar ${isOpen && 'open'}`}>
    <div className="title-container">
      <h4 className='title' onClick={() => toggleSidebar(!isOpen)} >Bookry</h4>
    </div>
    <div className="add-title bg-light">
      <p>Add a new <span>chapter</span></p>
    </div>
  </div>
}

export default BookSidebar