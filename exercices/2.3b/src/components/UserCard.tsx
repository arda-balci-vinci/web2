import type { User } from "./User";

interface UserCardProps {
    user:User;
}


const UserCard = (props:UserCardProps) =>(
    <div>
        <h2>{props.user.name}</h2>
        <p>Age: {props.user.age}</p>
      </div>
);

export default UserCard