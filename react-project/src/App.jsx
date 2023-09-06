import Counter from "./Counter"
import Students from "./students"
import Hello from './Hello'
function App() {

  const names = ["Alice", "Bob", "Charlie", 'Yehuda' ];


  return (
   <div>
   {/* <Students />
   <Counter /> */}

{names.map((name, index) => (
        <Hello index = {index} name={name} />
      ))}

      </div>
  )
}

export default App
