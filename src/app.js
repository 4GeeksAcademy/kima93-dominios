let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com'];

function generateDomains(pronoun, adj, noun, extension) {
    let domains = [];
    for (let p of pronoun) {
        for (let a of adj) {
            for (let n of noun) {
                for (let ext of extension) {
                    domains.push(`${p}${a}${n}${ext}`);
                }
            }
        }
    }
    return domains;
}

console.log(generateDomains(pronoun, adj, noun, domainExtensions));
