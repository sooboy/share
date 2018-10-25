import * as React from 'react';

import { ISpoter } from './helper/interface';

import "./SpotPremium.css"

interface ISpotProp{
    spot:ISpoter
}

class SpotPremium extends React.Component<ISpotProp,{}>{
  public render(){
      return (
           <p className="Item"> {this.props.spot.name} 的升贴水是： {this.props.spot.price}</p>
      )
  }
}

export default SpotPremium