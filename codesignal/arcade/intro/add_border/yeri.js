function addBorder(picture) {
    const border = picture[0]
    const re = /./gi;
    let newBorder = border.replace(re, '*');
    for(let i = 0; i<picture.length; i++) {
        picture[i] = `*${picture[i]}*`
    }
    picture.unshift(`**${newBorder}`)
    picture.push(`**${newBorder}`)
    return picture
}
