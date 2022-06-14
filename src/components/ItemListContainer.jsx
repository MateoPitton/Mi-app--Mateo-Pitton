import ItemCount from "./ItemCount"
export default function ItemListContainer(props) {
    return (
        <div><h1>{props.nombre}</h1>
        <ItemCount stock={5} initial={1}/>
        </div>
    )
}
