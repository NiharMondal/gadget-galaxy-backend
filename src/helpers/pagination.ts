export const pagination = (p:number, l:number)=>{
    const page = p || 1;
    const limit = l || 20;
    const skip = (page-1) * limit;

    return { limit, skip, page}
}