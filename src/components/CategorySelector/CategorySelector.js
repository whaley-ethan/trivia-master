import React from 'react'
import categories from '../../config/categories.json'

function CategorySelector({setCategory, category}) {
  const createCategoryItems = () => {
    
    return categories.map((category) => {
      return (
      <option key={category.id} value={category.id}>{category.name}</option>
      )
    })
  }

  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      {createCategoryItems()}
      <option key='random' value=''>Random Category</option>
    </select>
      
  )
}

export default CategorySelector
