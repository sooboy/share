import * as React from 'react';

import { ISpoter,ISpoterList } from './helper/interface';

import  SpotPremium  from './SpotPremium'
import  SpotPrice  from './SpotPrice'

interface ISpotProp{
    spots:ISpoterList[]
}

class Spot extends React.Component<ISpotProp,{}>{


    public spotItem(spot:ISpoter){
            if ( typeof spot.price === "string"){
                return <SpotPremium spot={spot} />
            }else{
                return  <SpotPrice spot={spot} />
            }
    }

    public spotChildren(spots:ISpoterList[]){
         const components:any =[]
         for (const item of spots){
             const element = (
                 <li>
                     {this.spotItem(item.spot)}
                     {item.children&&this.spotChildren(item.children)}
                 </li>
             )
             components.push(element)
         }
         return <ul> { components }</ul>
    }

    public render(){
         return (
             <div>
                 {this.spotChildren(this.props.spots)}
             </div>
             )
    }
}

export default Spot;

