import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='ItemListContainer'>
            <h4>{greeting}</h4>
        </div>
    )
}

export default ItemListContainer