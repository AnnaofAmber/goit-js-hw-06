const categories = document.querySelectorAll('.item')
console.log(`Number of categories: ${categories.length}`);

categories.forEach(function (item, index) {

    const text = document.querySelectorAll("h2")
    const heading = text[index]
    console.log(`Category: ${heading.textContent}`);
    
    const listItem = item.lastElementChild
    console.log(`Elements: ${listItem.children.length}`)
}

)