import { IPokemonSprites } from "./ISprites"

export interface IPokemondetale{
    id: number
    name: string
    height: number
    weight: number
    sprites: IPokemonSprites
}