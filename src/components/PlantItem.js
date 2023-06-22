import { plantList } from '../datas/plantList'
import './datas/plantList'
import 'CareScale'

function PlantItem({name, cover, id, light, water}) {
    const name = plantList.name
    const cover = plantList.logo
    const id = plantList.id
    return(
        <div>
            <h1 classname='lmj-title'>{name}</h1>
            <img src={cover} alt='' />
            <p>{id}</p>
            <CareScale />
        </div>
    )
}

export default PlantItem