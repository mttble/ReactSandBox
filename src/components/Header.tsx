import './Header.css'
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {
  return (
    <div className='headerContainer' style={{backgroundColor:'#1b1b1b'}}>
      <img src="./src/assets/logo.png" alt='logo' style={{width:100, height:100, borderRadius:20}}/>
      <FiAlignJustify style={{width:50, height:50, color:'#333333'}} />
    </div>
  )
}

export default Header

