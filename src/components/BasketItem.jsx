function BasketItem(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        handlePlus = Function.prototype,
        handleMinus = Function.prototype,
    } = props;

    return <li className="collection-item">
        {displayName} <i className="material-icons basket-quantity" onClick={()=>handlePlus(mainId)}>add</i> x {quantity} {' '}
         <i className="material-icons basket-quantity" onClick={()=>handleMinus(mainId)}>remove</i> = {price.finalPrice * quantity} $
        <span className="secondary-content" onClick={() => removeFromBasket(mainId) }>
            <i className="material-icons">close</i>
        </span>
    </li>
}

export {BasketItem};