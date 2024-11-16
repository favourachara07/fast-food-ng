import { useLoaderData } from 'react-router-dom';
import {getMenu} from '../../services/apiRestaurant'
import MenuItem from './MenuItem'

function Menu() {
  // providing the data to teh page/comp.
  const menu = useLoaderData()
  return <ul>
    {menu.map(pizza=> <MenuItem pizza={pizza} key={pizza.id}/>)}
  </ul>
} 
// the loader fetches teh data
export async function loader(){
   const menu=await getMenu()
   return menu
}

export default Menu;
