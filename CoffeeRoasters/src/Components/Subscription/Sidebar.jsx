export default function Sidebar({isActive, name, index, handleClick}){
   return (
   <li onClick={handleClick} className={`list-name ${isActive ? 'active' : ''}`}><span className={`progress-number ${isActive ? 'active' : ''}`}>{index + 1} </span>{name}</li>
   )
}
