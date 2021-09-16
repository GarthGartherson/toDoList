import './app/stylesheets/style.css'

const app =(function () {
    const toDoList = [];

    function renderToDo(eventName, date, time){
        return {
            eventName: eventName,
            date: date,
            time: time
        }
    }

    const addButton = document.querySelector('.button_toDo')
    addButton.addEventListener('click', () => {
        const event = renderToDo('go fishing', 3, 17.9)
        toDoList.push(event)
    })



})()

console.log(app)
// console.log(app)