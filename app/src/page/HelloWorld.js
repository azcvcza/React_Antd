import ShoppingList from './components/ShoppingList';
import Picture from './components/Picture'
import Square from './components/Square'
export default () => {

    const picture = { src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg' }
    return ( <
        div >
        <
        h2 > Hello World < /h2> <
        ShoppingList name = "zhang3" > < /ShoppingList> <
        Picture src = { picture.src } > < /Picture><Square></Square > < /
        div > );
}