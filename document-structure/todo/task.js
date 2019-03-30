let id = 0;
let obj = {};
const tasksList = document.querySelector('.tasks__list');
function showTask() {
    if (localStorage.length > 0) {
        let serialObj = JSON.parse(localStorage.getItem('todo'))

        for (prop in serialObj) {
            id = prop;
            obj[id] = serialObj[prop];
            tasksList.innerHTML += `
                        <div class="task" data-id = ${prop}>
                            <div class="task__title">
                                ${serialObj[prop]}
                            </div>
                            <a href="#" class="task__remove">&times;</a>
                        </div>`;
        }
    }
}
showTask()


const taskInput = document.getElementById('task__input');
taskInput.onkeypress = function (e) {
    
    //if (e.which === 13) {

        const str = taskInput.value;
        taskInput.value = null;

        if (str.length > 0) {
            for (let jeId of tasksList.children) {
                if (jeId.dataset.id >= id) {
                    id = jeId.dataset.id;
                    id = Number(id) + 1;
                }
            }
            obj[id] = str;
            tasksList.innerHTML += `
                        <div class="task" data-id = ${id}>
                            <div class="task__title">
                                ${str}
                            </div>
                            <a href="#" class="task__remove">&times;</a>
                        </div>`;
        }
    //}
    let serialObj = JSON.stringify(obj)
    localStorage.setItem('todo', serialObj);
}

tasksList.onclick = function (e) {
    if (e.target.className.includes('task__remove')) {
        e.target.parentElement.remove();
        if (localStorage.length > 0) {
            let serialObj = JSON.parse(localStorage.getItem('todo'))
            for (prop in serialObj) {
                if (e.target.parentElement.dataset.id == prop) {
                    delete obj[prop];
                    delete serialObj[prop]
                }
                let todoObj = JSON.stringify(serialObj)
                localStorage.setItem('todo', todoObj);
            }
            if (localStorage.todo.length == 2) {
                localStorage.removeItem('todo');
            }
        }
    }
}

