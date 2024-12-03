import { useState } from "react"
import './Product.css'


interface IProductProps {
    name: string,
    img: string,
    price: number,
}

export function Product(props:IProductProps){
    // створюємо стан для кількості продукту (який ми не використовуємо ¯\(°_o)/¯)
    const [amount, setAmount] = useState(1)
    // створюємо функцію, яка буде збільшувати кількість продукту на 1
    function incrementAmount() {
        setAmount(amount+1)
    }
    // створюємо функцію, яка буде зменшувати кількість продукту на 1
    function decrementAmount() {
        if(amount > 1) {
        setAmount(amount-1)
    }
    }
    return (
        <div className="product">
            <div className="prodInfo">
                <h1>{props.name}</h1>
                <img className="prodImg" src={props.img} alt="" id="img"/>
                <h2 className="Price">Цена: {props.price}</h2>
            </div>
            <button className="buy">Купить</button>
        </div>
    )
}
