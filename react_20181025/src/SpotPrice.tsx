import * as React from 'react';

import { Spoter } from './helper/interface';

interface SpotProp{
    spot:Spoter
}

class SpotPrice extends React.Component<SpotProp,{}>{
  public render(){
      return (
           <p> {this.props.spot.name} 的价格是： {this.props.spot.price}</p>
      )
  }
}

export default SpotPrice