import { useEffect, useState } from "react"
import { Product } from "../Product/Product"
import './ProductsList.css'

const products = [
    {id: 0, category: 'Chat-Bot', name: 'Daniel', img: 'https://th-thumbnailer.cdn-si-edu.com/faJoWtc8qjIHuCadMQ2MKjt6xmo=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/6a/fa/6afa4efa-3f5a-4ea7-90ea-e47173217d59/42-29316901.jpg', price: -15},
    {id: 1, category: 'Floppa', name: 'Ilia Bulkin', img: 'https://s7d2.scene7.com/is/image/TWCNews/AP21286725279031_crop?wid=767&hei=431&$wide-bg$', price: -30},
    {id: 2, category: 'Cats', name: 'Vanya', img: 'https://www.thewildlifediaries.com/wp-content/uploads/2018/11/Snapseed-1-768x512.jpg', price: -45},
    {id: 3, category: 'Cats', name: 'Фатуев Михайло', img: 'https://www.thewildlifediaries.com/wp-content/uploads/2018/04/Siberian-tiger-768x512.jpg', price: 52},
    {id: 4, category: 'Chat-Bot', name: 'Daniel4', img: 'https://www.thewildlifediaries.com/wp-content/uploads/2020/01/leopard-walking-768x512.jpg', price: -60}
]

export function ProductsList(){
    // створюємо стан, в якому буде зберігатися масив з продуктами, які будуть відображені на головній сторінці
    const [filteredProducts, setFilteredProducts] = useState(products)
    // створюємо стан, в якому зберігаємо назву обраної категорії
    const [selectedCategory, setSelectedCategory] = useState('All')
    
    // створюємо еффект, який змінює товари у масиві filteredProducts в залежності від обраної категорії
    // якщо стан selectedCategory зміниться, то цей еффект відпрацює.
    useEffect(()=>{
        // якщо обрана категорія "All" (тобто всі, стоїть за замовчуванням), 
        // то у стан filteredProducts запишуться всі продукти з нашої "бази даних" (масиву products)
        if(selectedCategory === 'All'){
            setFilteredProducts(products)
        // Інакше, тобто коли обрана якась інша категорія, а не "All", то ми фільтруємо масив products
        // за допомоогою функції filter: якщо обрана категорія співпадає з категорією, яку має продукт,
        // то записуємо цей товар у масив filteredProducts
        } else{
            setFilteredProducts(products.filter( (product)=>{
                return product.category === selectedCategory
            }))
        }
        console.log(selectedCategory)
    }, [selectedCategory])

    return <div className="product-list">
        {/* Додаємо тег select (це dropdown list, тобто якщо ми натиснемо на нього, то з'явиться нова менюшка з категоріями) */}
        {/* Цей тег повинен в собі включати теги option, які працюють як один з варіантів, який можна обрати, якщо натиснути на select */}
        {/* Якщо користувач обере якусь категорію, то спрацює функція, яку ми передали в onChange */}
        {/* У цій функції ми змінюємо категорію на value (значення) одного з options (опцій)*/}
        <select onChange={(event)=>{
            setSelectedCategory(event.target.value)
        }
        }>
            {/* Створюємо 4 options, перший з яких - активний по дефолту ("All", тобто товари з усіх категорій) */}
            <option value = 'All'>All</option>
            <option value = 'Floppa'>Floppa</option>
            <option value = 'Chat-Bot'>Chat-Bot</option>
            <option value = 'Cats'>Cats</option>
        </select>
            {/* Показуємо товари, які знаходяться у масиві filteredProducts */}
            {filteredProducts.map( (product) => {
                return <Product key = {product.id} name = {product.name} price = {product.price} img = {product.img}></Product>
            }
            )}
    </div>
}