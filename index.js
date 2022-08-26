const state= {
    gameElement: document.querySelector('.game'),
    cells: Array(9).fill(null)
}


function drawboard() {

    for (let i=0; i < 9; i++) {   
        const cell = document.createElement('div')
        cell.classList.add('cell')

        if (state.cells[i]) {  // does the cell have an X or an O? if so, this code runs

            const cellSymbol = document.createElement('p') // <p></p> 
            cellSymbol.innerText = 'Jeff'
            cell.append


        } else { // otherwise it will detect the cell is empty and will run this next
            cell.addEventListener('click', function (){
                state.cells[i] = 'x'

                drawboard()
        })


        state.gameElement.append(cell)

        }
    }
}
drawboard()