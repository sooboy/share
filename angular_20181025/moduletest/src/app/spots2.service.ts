import { Injectable } from '@angular/core';

import { SpoterList } from '../helper/interface';

@Injectable()
export class Spots2Service {
   name:string = "News"
  constructor() { 
   
  }

  getSpots():SpoterList[]{
    return [{
      spot:{
        price:345313.1,
        name:"电解铜"
      },
      children:[
        {
         spot:{
           price:"-32",
           name:"1#电解铜"
         },
         children:[
           {
             spot:{
               price:312333.1,
               name:"1#电解铜-华北"
             }
           },
           {
             spot:{
               price:"-341234",
               name:"1#电解铜-华南"
             }
           }
         ]
        },
        {
         spot:{
           price:"-3122",
           name:"2#电解铜"
         },
         children:[
           {
             spot:{
               price:31212333.1,
               name:"2#电解铜-华北"
             }
           },
           {
             spot:{
               price:"-341234",
               name:"2#电解铜-华南"
             }
           }
         ]
        }
       ]
   },
   {
     spot:{
       price:"+323",
       name:"电解铝"
     },
     children:[
       {
        spot:{
          price:"+21",
          name:"1#电解铝"
        },
        children:[
          {
            spot:{
              price:312333.1,
              name:"1#电解铝-华北"
            }
          },
          {
            spot:{
              price:"-234",
              name:"1#电解铝-华南"
            }
          }
        ]
       }]
  }
 ]
  }
}
