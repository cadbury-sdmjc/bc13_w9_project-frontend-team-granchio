function Comment(props){
    return (
        <div>
            <h6>{props.commAuthor}</h6>
            <p>{props.commContent}</p>
        </div>
    )
}

export default Comment