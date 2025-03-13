// parent node
const body = document.body

// first tag section nodes
const table = document.createElement('table')
const columnA = document.createElement('tr')
const row1A = document.createElement('td')
const row2A = document.createElement('td')
const row3A = document.createElement('td')

// add the table to the body tag
body.appendChild(table)

// add the tr tag to the table tag
table.appendChild(columnA)

// added all the td tags to the column 
columnA.appendChild(row1A)
columnA.appendChild(row2A)
columnA.appendChild(row3A)

// add second set of text to the td tags
row1A.append('Car')
row2A.append('Top')
row3A.append('Price')


// Second tag section nodes
const columnB = document.createElement('tr')
const row1B = document.createElement('td')
const row2B = document.createElement('td')
const row3B = document.createElement('td')

// add the second tr tag to the table tag
table.appendChild(columnB)

// added all the second td tags to the column 
columnB.appendChild(row1B)
columnB.appendChild(row2B)
columnB.appendChild(row3B)

// add text to the td tags
row1B.append('Chevrolet')
row2B.append('120mph')
row3B.append('$10,000')


// Third tag section nodes
const columnC = document.createElement('tr')
const row1C = document.createElement('td')
const row2C = document.createElement('td')
const row3C = document.createElement('td')

// add the second tr tag to the table tag
table.appendChild(columnC)

// added all the second td tags to the column 
columnC.appendChild(row1C)
columnC.appendChild(row2C)
columnC.appendChild(row3C)

// add text to the td tags
row1C.append('Pontiac')
row2C.append('140mph')
row3C.append('$20,000')

// Shows the the table structure
console.log(table)


// Styling for table
table.setAttribute('id','main')
const main = document.getElementById('main') // you cannot just do main.style.color without calling it first
main.style.color = 'black' // Making the text of all the text black
main.style.backgroundColor = 'hotPink' // sets the background of the table field to hot pink
main.style.fontSize = '50px'


// styling for the first row
columnA.setAttribute('id','first') // create the id so I can add styling to it
const first = document.getElementById('first') 
first.style.color = 'white' // Changes the text of the first row white instead of black
first.style.backgroundColor = 'lightPink' // sets the background to light pink instead of hot pink
first.style.textAlign = 'center' // aligns the text to the center for the first row

// styling for row 2


// make on array of the table children so I can increment through it
const tableChildren = Array.from(table.children)

// loops the table children
for(let j=0; j < tableChildren.length -1; j++){
    // make on array of each of the table children so I can increment through them
    const row1Children = Array.from(tableChildren[j].children)

    // loops through the children of the children of the table
    for(let i=0; i < row1Children.length; i++){
        let currentTag1 = row1Children[i] // assigns currentTag to the value of the current child
        currentTag1.setAttribute('id',`row{j}-cell{i}`) // finds the child using the row and columns
        currentTag1.style.padding = "10px" // add padding to the current child

        // remove padding to Chevrolet because it looked uneven
        const columnBChildren = Array.from(columnB.children)
        const C1R2 = columnBChildren[0]
        C1R2.setAttribute('id','second')
        C1R2.style.paddingLeft = "0px"
    }
}