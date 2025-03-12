// parent node
const body = document.body

// first tag section nodes
const tableA = document.createElement('table')
const columnA = document.createElement('tr')
const row1A = document.createElement('td')
const row2A = document.createElement('td')
const row3A = document.createElement('td')

// add the table to the body tag
body.appendChild(tableA)

// add the tr tag to the table tag
tableA.appendChild(columnA)

// added all the td tags to the column 
columnA.appendChild(row1A)
columnA.appendChild(row2A)
columnA.appendChild(row3A)

// add text to the td tags
row1A.append('Car')
row2A.append('Top')
row3A.append('Price')


// Second tag section nodes
const columnB = document.createElement('tr')
const row1B = document.createElement('td')
const row2B = document.createElement('td')
const row3B = document.createElement('td')

