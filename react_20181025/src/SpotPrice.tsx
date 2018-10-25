import * as React from 'react';

import { ISpoter } from './helper/interface';

import "./SpotPrice.css"
interface ISpotProp{
    spot:ISpoter
}

class SpotPrice extends React.Component<ISpotProp,{}>{
  public render(){
      return (
           <p className="Item"> {this.props.spot.name} 的价格是： {this.props.spot.price}</p>
      )
  }
}

export default SpotPrice