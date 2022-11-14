const CardListItem = ({
    groupname,
    number,
    selected,
}) => {
    const pressed ={
        boxShadow: "inset 0 0 10px #aeaeae",
        borderRadius: '10px',
        background: '#fafafa'
    }

    const unPressed ={
        boxShadow: "0 0 10px #e0e0e0",
        borderRadius: '10px'
    }

    return (
    <div class="m-2 p-5" style={ selected ? pressed : unPressed }>
        <div style={ selected ? {fontSize:'20px', color:'orange'} : {fontSize:'20px', color:'grey'} }>{ groupname }</div>
    </div>
    );
}
     
export default CardListItem;