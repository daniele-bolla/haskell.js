const headAndTail = (xs:any[])=> {
    const [ head, ...tail] = xs;
    return {head, tail}
}

function isEmpty(f:any[]){
    const {length}= f
    return length === 0
}

export function zip(f:any[],s:any[]){
    const zipped: any[][] = []
    const recursion = (f:any[],s:any[])=>{
        const {head:headF,tail:tailF} = headAndTail(f)
        const {head:headS,tail:tailS} = headAndTail(s)
        zipped.push([headF,headS])
        if(isEmpty(tailF) || isEmpty(tailS)) return 
        recursion(tailF,tailS)
    }
    recursion(f,s)
    return zipped
}

export function even(n:number){
    return n % 2 == 0
}