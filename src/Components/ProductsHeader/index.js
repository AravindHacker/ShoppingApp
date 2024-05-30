import { FaFilter } from "react-icons/fa";

import './index.css'

const ProductHeader=(props)=>
{
    const {sortbyOptions,activeOptionId,updateActiveOptionId}=props

    const onChangeSortby=(event)=>[
            updateActiveOptionId(event.target.value)
    ]
    
        return(
            <div className='filter-con'>
                <FaFilter className="FaFilter-icons"/>

                 <p className="sort-bar">Sort by</p>
                 <select className='filter-options' onChange={onChangeSortby}>
                   {sortbyOptions.map(eachOptions=>(
                    <option
                         key={eachOptions.optionId}
                         value={activeOptionId}
                     >
                        {eachOptions.optionId}
                     </option>    
                   ))}
                 </select>
            </div>
        )
    
}
export default ProductHeader;