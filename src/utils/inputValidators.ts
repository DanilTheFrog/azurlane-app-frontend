interface GO {
    [key: string]: any
}

export const validateNumber = (val: string) => {

    if (val.length === 0) return false
    if(isNaN( Number(val) )) return false

    return true
}

export const validateString =(val: string, l?:number) => {
    if(l) {
        if(val.length < l) return false
    }
    if(val.length < 1) return false

    return true
}

export const validateTime = (val: string, getTime?: boolean)=> {
    if(val.toLowerCase() === 'research') return true


    const time: number[] = val.split('-').map(i=>Number(i))
    if(time.length !== 2) return false

    if (time[0] > 24 || time[1] > 59) return false
    
    return true
}


export const normalizeObject = (obj: GO, s: string, num?: string[]) => {
    
    let answ: GO = {}
    const keys:string[] = [];

    for(let key in obj) {
        if(key.includes(s)) {
            const path = key.split(s);
            if(!keys.includes(path[0])) {
                keys.push(path[0])
                answ[path[0]] = {} as GO
            }
            if(num) {
                answ[path[0]][path[1]] = (num.includes(path[0]) || num.includes(path[0])) ? Number(obj[key]) : String(obj[key])
            } else answ[path[0]][path[1]] = obj[key]

        } else {
            answ[key] = num?.includes(key) ? Number(obj[key]) : String(obj[key])
        }
    }

    return {...answ}
}