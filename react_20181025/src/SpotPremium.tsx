import * as React from 'react';

import { Spoter } from './helper/interface';

interface SpotProp{
    spot:Spoter
}

class SpotPremium extends React.Component<SpotProp,{}>{
  public render(){
      return (
           <p> {this.props.spot.name} 的升贴水是： {this.props.spot.price}</p>
      )
  }
}

export default SpotPremium