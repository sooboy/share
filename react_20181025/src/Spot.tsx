import * as React from 'react';

import { SpoterList,Spoter } from './helper/interface';

import  SpotPremium  from './SpotPremium'
import  SpotPrice  from './SpotPrice'

interface SpotProp{
    spots:SpoterList[]
}

class Spot extends React.Component<SpotProp,{}>{


    public spotItem(spot:Spoter){
            if ( typeof spot.price === "string"){
                return <SpotPremium spot={spot}></SpotPremium>  
            }else{
                return  <SpotPrice spot={spot}></SpotPrice> 
            }
    }

    public spotChildren(spots:SpoterList[]){
         let components:any =[]
         for (let i=0;i<spots.length;i++){
             let item = spots[i];
             let element = (
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

