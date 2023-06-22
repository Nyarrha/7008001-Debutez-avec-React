import CareScale from 'CareScale'
import '../styles/PlantItem.css'


function PlantItem({id, name, cover, light, water}) {
    return(
        <li key={id} classname='lmj-plant-item'>
            <h1>{name}</h1>
            <img className='lmj-plant-item-cover' src={cover} 
                alt={name} />
            <CareScale careType={light} scaleValue={scaleValue} />
            <CareScale careType={water} scaleValue={scaleValue} />
        </li>
    )
}