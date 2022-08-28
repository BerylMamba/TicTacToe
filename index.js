/* Creating a variable called state and assigning it to an object. The object has three properties:
gameElement, cells, and symbols. */
const state= {
    gameElement: document.querySelector('.game'),
    cells: Array(9).fill(null),
    symbols: ['o', 'x']
}


function drawboard() {

    console.log("drawBoard has run")
    state.gameElement.innerHTML = '' /* Clearing the board so it does not repeat itself */
    
    /* Creating a div with the class of cell. */

    for (let i=0; i < 9; i++) {   
        const cell = document.createElement('div')
        cell.classList.add('cell')

        if (state.cells[i]) {  // does the cell have an X or an O? if so, this code runs

            const cellSymbol = document.createElement('p') // <p class="symbol"></p> 
            cellSymbol.innerText = state.cells[i]
            cellSymbol.classList.add('symbol')

            cell.append(cellSymbol)
        } else { // otherwise it will detect the cell is empty and will run this next
            cell.addEventListener('click', function (){
                state.cells[i] = 'x'
                state.symbols.reverse()
                state.cells[i] = state.symbols[0]

                // console.log('cell ${i} was clicked')
                // console.log('i added an x to the celles array at index')
                console.log(state.cells)

                drawboard()
            })
        }

        state.gameElement.append(cell)

    }
}
drawboard()