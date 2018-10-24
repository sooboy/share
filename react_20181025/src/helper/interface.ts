interface Spoter{
    price:number | string
    name:string
}

interface SpoterList{
    spot:Spoter,
    children?:SpoterList[]
}

export {
    Spoter,
    SpoterList
}