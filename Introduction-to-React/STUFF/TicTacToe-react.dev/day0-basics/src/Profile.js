// Writing markup with JSX
// Adding styles 
// Displaying data 

import './Profile.css'

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};


export function Profile() {
    return (
        <>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Image of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                }}
            >
            </img>
            <h1>{user.name}</h1>
        </>
    );
}
