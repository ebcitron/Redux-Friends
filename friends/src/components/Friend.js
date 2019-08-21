import React from 'react';


const Friend = ({friend}) => {
return(
    <>
    <div>{friend.name} {friend.email} {friend.age}}</div>
    </>

)
}

export default Friend;