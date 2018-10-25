interface ISpoter{
    price:number | string
    name:string
}

interface ISpoterList{
    spot:ISpoter,
    children?:ISpoterList[]
}

export {
    ISpoter,
    ISpoterList
}