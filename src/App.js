import { useState, useEffect } from 'react'
import './App.scss';
import axios from 'axios'
import Recipe from './Recipe'

function App() {
  const [food, setFood] = useState([])
  const [search, setSearch] = useState('')

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`

  useEffect(() => {

    getRecipes()
  }, [search])


  const getRecipes = async () => {
    const { data } = await axios.get(url)
    setFood(data.meals)
  }


  return (
    <>

      <h2>React recipe app</h2>


      {/* <input type="text" onChange={e => setSearch(e.target.value)} /> */}
      {console.log(food)}

      <ul>
        {food.map(recipe => (
          <li key={recipe.idMeal}>name</li>
        ))}
      </ul>

    </>
  );
}

export default App;