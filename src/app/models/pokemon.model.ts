export interface Pokemon {
    
    national_number: number,
    evolution: Evolution,
    sprites: Sprites,
    name: string,
    type: string[],
    total: number,
    hp: number,
    attack: number,
    defense: number,
    sp_atk: number,
    sp_def: number,
    speed: number,
    isFavorite:boolean
}

export interface Sprites {
    normal: string,
    large: string,
    animated: string
}

export interface Evolution {
    name: string
}

export interface Results {
    results: Pokemon[]
}