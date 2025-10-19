import PageTitle from "./PageTitle";
import UserCard from "./UserCard";
import Footer from "./Footer";
import type { User } from "./User";

const App = () => {
  const title = "Welcome to My App";

 const users: User[] = [
     { name: "Alice", age: 25,isOnline:true },
    { name: "Bob", age: 30 ,isOnline:false},
    { name: "Charlie", age: 35 ,isOnline:true},
 ];

  const footerText = "© 2023 My App";

  return (
    <div>
    <PageTitle title={title}/>
    {users.map((user,index)=>(
       <UserCard key={index} user={user}/>      
    ))}
   
     <Footer text={footerText}/>

    </div>
  );
};

export default App;
