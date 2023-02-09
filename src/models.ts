
export interface ICharacter {
    id: string;
    name: string;
    class: string;
    image: string;
    faction: string;
    link: string;
    rarity: number;
    stats: {
        construction: number;
        lvl: number;
        hp: number;
        fp: number;
        trp: number;
        avi: number;
        aa: number;
        asw: number;
        rarity: number;
    };
}

export interface IFilter {
    name: string;
    selected: string;
    values: string[];
}

export interface IItem {
    id: string;
    name: string;
    class: string;
    link: string;
    image: string;
    faction: string;
    rarity: number;
    stats: {
        fp: number,
        eva: number,
        trp: number,
        hp: number,
        oxy: number,
        hit: number,
        avi: number,
        aa: number,
        rld: number,
        asw: number,
        speed: number,
        lck: number
    }
}

export interface ISelect {
    [key: string]: string ;
    title: string;
    value: string;
}

export const selectRarity: ISelect[] = [
    {
        title: 'Common',
        value: '2'
    },    {
        title: 'Rare',
        value: '3'
    },    {
        title: 'Elite',
        value: '4'
    },    {
        title: 'Super Rare',
        value: '5'
    },
    {
        title: 'Ultra',
        value: '6'
    }
]

export const selectClass: ISelect[] = [
    {
        title: 'DD',
        value: 'DD'
    },
    {
        title: 'CL',
        value: 'Cl'
    },
    {
        title: 'CA',
        value: 'CA'
    },
    {
        title: 'BB',
        value: 'BB'
    },
    {
        title: 'CV',
        value: 'CV'
    },
    {
        title: 'AR',
        value: 'AR'
    },
    {
        title: 'SS',
        value: 'SS'
    },
    {
        title: 'Other',
        value: 'Other'
    },
]

export const selectCharClass: ISelect[] = [
    {
        title: 'DD',
        value: 'DD'
    },
    {
        title: 'CL',
        value: 'Cl'
    },
    {
        title: 'CA',
        value: 'CA'
    },
    {
        title: 'BB',
        value: 'BB'
    },
    {
        title: 'CV',
        value: 'CV'
    },
    {
        title: 'AR',
        value: 'AR'
    },
    {
        title: 'SS',
        value: 'SS'
    },
    {
        title: 'Other',
        value: 'Other'
    },
]

export const selectFaction: ISelect[] = [
    {
        title: 'Eagle Union',
        value: 'Eagle Union'
    },
    {
        title: 'Royal Navy',
        value: 'Royal Navy'
    },
    {
        title: 'Sakura Empire',
        value: 'Sakura Empire'
    },
    {
        title: 'Iron Blood',
        value: 'Iron Blood'
    },
    {
        title: 'Dragon Empery',
        value: 'Dragon Empery'
    },
    {
        title: 'Sardegna Empire',
        value: 'Sardegna Empire'
    },
    {
        title: 'Northen Parliment',
        value: 'Northen Parliment'
    },
    {
        title: 'Irirs Libre',
        value: 'Irirs Libre'
    },
    {
        title: 'Vichya Dominion',
        value: 'Vichya Dominion'
    },
    {
        title: 'Other',
        value: 'Other'
    },
]

