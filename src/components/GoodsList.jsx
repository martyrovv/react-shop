import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const {goods = [], addToBasket = Function.prototype} = props;

    console.log('Товары:', goods);
    
    if (!goods.length) {
       return <h3>Nothig here</h3>
    }

    return (
        <div className="goods">
            {
                goods.map((item) => (<GoodsItem key={item.mainId} {...item} addToBasket = {addToBasket}/>))
            }
        </div>
    );
}

export {GoodsList};