import {GameView, clickToTail, canvas} from "./gameveiw.js"
import {move} from "./gamerun.js"

const initialState = [
    [6, 1, 7],
    [3, 8, 0],
    [2, 5, 4]]

let s1 = initialState
new GameView(s1)

canvas.addEventListener('click', moveView)


function moveView(event)
{
    const [i, j] = clickToTail(event.offsetX, event.offsetY)
    s1 = move(s1, i, j)
    new GameView(s1)
}