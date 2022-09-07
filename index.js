/* Creating a variable called state and assigning it to an object. The object has three properties:
gameElement, cells, and symbols. */
const state= {
    gameElement: document.querySelector('.game'),
    cells: Array(9).fill(null),
    symbols: ['o', 'x'],
    winningConditions: [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // middle column
        [2, 5, 8], // right column
        [0, 4, 8], // left diagonal
        [2, 4, 6], // right diagonal
    ],
    gameFinished: false,

}


function drawboard() {

    //console.log("drawBoard has run")
    state.gameElement.innerHTML = ''                    /* Clearing the board so it does not repeat itself */
    
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
                if(state.gameFinished){
                    return
                }

                state.cells[i] = 'x'
                state.symbols.reverse()
                state.cells[i] = state.symbols[0]

                // console.log('cell ${i} was clicked')
                // console.log('i added an x to the celles array at index')
                console.log(i)
                //console.log(state.cells)

                drawboard()

                if(checkForWinner()) {
                    // winner code goes here
                    state.gameElement = true
                    drawBanner()
                }
            })
        }

        state.gameElement.append(cell)

    }

}

function drawBanner() {
    const banner = document.createElement('div')
    banner.classList.add('banner')

    const h1 = document.createElement('h1')
    h1.innerText = "Congratulations! You Won!"

    banner.append(h1)
    
    state.gameElement.append(banner)
}

function checkForWinner() {
    return state.winningConditions.some(function (combo) {
        const cells = combo.map(function (index) {
            return state.cells[index]
        })
        //console.log("winning combo array", cells )
        /* Checking to see if the cells array has a null value and if the size of the cells array is
        equal to 1. */
        return !(cells.includes(null)) && new Set(cells).size === 1

    })
}
drawboard()