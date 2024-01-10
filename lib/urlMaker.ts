export const URLMaker = (url: string,next: string) => {
    const domain = url + '/' + next.split(' ').join('%20')
    return domain
    // https://icy-indulgence.vercel.app/product/Rocky%20Road/Classic%20Vanilla
}