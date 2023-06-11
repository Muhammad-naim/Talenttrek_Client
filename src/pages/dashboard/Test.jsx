import { slide as Menu } from 'react-burger-menu'
import './test.css'
const Test = () => {
    const showSettings = (event) => {
        event.preventDefault()
    }
    
    return (
        <div className='h-screen grid grid-cols-5 gap-2'>
          <h2>let us test it!</h2>
        </div>
    );
};

export default Test;