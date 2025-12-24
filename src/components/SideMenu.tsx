import React from 'react'
import TagButton from './TagButton'


const SideMenu = () => {
  return (
    <div className='m-6 border-4 border-teal-600 flex flex-wrap justify-center'>
        <TagButton />
        <TagButton />
        <TagButton />
        <TagButton />
        <TagButton />
        <TagButton />
        <TagButton />
    </div>
  )
}

export default SideMenu