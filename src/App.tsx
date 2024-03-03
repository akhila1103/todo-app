import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import ItemCard from "./components/ItemCard"



function App() {

  return (
    <div className="first-div">
    <ItemCard />
    </div>
  )
}

export default App;
library.add(fab, fas, far);
