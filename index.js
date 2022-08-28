const state= {
    gameElement: document.querySelector('.game'),
    cells: Array(9).fill(null),
    symbols: ['o', 'X']
}


function drawboard() {

    console.log("drawBoard has run")
    state.gameElement.innerHTML = ''

    for (let i=0; i < 9; i++) {   
        const cell = document.createElement('div')
        cell.classList.add('cell')

        if (state.cells[i]) {  // does the cell have an X or an O? if so, this code runs

            const cellSymbol = document.createElement('p') // <p class="symbol"></p> 
            cellSymbol.innerText = 'X'
            cellSymbol.classList.add('symbol')

            cell.append(cellSymbol)
        } else { // otherwise it will detect the cell is empty and will run this next
            cell.addEventListener('click', function (){
                state.cells[i] = 'x'

                // console.log('cell ${i} was clicked')
                // console.log('i added an x to the celles array at index')
                // console.log(state.cells)



                drawboard()
            })
        }

        state.gameElement.append(cell)

    }
}
drawboard()