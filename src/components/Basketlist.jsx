import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const { order = [], 
        handleBasketShow = Function.prototype, 
        removeFromBasket = Function.prototype, 
        handlePlus = Function.prototype,
        handleMinus = Function.prototype,
    } = props;

    const TotalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity;
    },0);

    return <ul className="collection basket-list">
        <li className="collection-item active">Goods</li>
    {
        order.length ? order.map(item => (
            <BasketItem key={item.mainId} {...item} 
            removeFromBasket = {removeFromBasket} 
            handlePlus={handlePlus}
            handleMinus = {handleMinus}
            />
        )) : <li className="collection-item">Empty</li>
    }
        <li className="collection-item active">Total Price: {TotalPrice} $
            <button className="btn-order seconary-content">Place an order</button>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </ul>
}

export { BasketList };