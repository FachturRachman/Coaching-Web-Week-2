const UserCard = (props) => {

    return (
        <div>
            <h1>Identitas Saya</h1>
            <p>Nama :  {props.nama}</p>
            <p>NPM : {props.npm}</p>
            <p>GitHub : {props.github}</p>
        </div>
    )
}

export default UserCard;