const Twosum = (num, target) => {
    if (num.length < 2) return [];
    const seen = {};
    for (let i = 0; i < num.length; i++){
        const currentNum = num[i]
        const numToFind = target - currentNum
        if(seen[numToFind] !== undefined) return [seen[numToFind], i]
        seen[currentNum] = i; 
    } 
    return [];
}

module.exports = Twosum;