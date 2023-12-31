import './_loader.scss'
import { Loader2 } from 'lucide-react'
const Loader = ({size = 24} : {size?:number}) => {
    return (
        <div className='spinner'>
            <Loader2 size={size} />
        </div>
    )
}

export default Loader