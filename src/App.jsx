import UserCard from "./component/UserCard";
import Counter from "./component/Counter";
import Input from "./component/Input";
// import './app.css'
const App = () => {

  return (
    <div>
      <UserCard nama="Fachtur Rachman" npm = "2428250038" github="asd"  ></UserCard>

      <Counter ></Counter>
      <Input></Input>
    </div>
    
    
    
  );
};
export default App;