
const tasksList = document.querySelector('.tasks__list');
function showTask() {

    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            tasksList.innerHTML += `
                        <div class="task" data-id = ${key}>
                            <div class="task__title">
                                ${localStorage.getItem(key)}
                            </div>
                            <a href="#" class="task__remove">&times;</a>
                        </div>`;
        }
    }
}
showTask()

const taskInput = document.getElementById('task__input');
taskInput.onkeypress = function (e) {
    if (e.which === 13) {

        const str = taskInput.value;
        taskInput.value = null;

        if (str.length > 0) {
            let id = 0;

            for (let jeId of tasksList.children) {
                if (jeId.dataset.id >= id) {
                    id = jeId.dataset.id;
                    id = Number(id) + 1;
                }
            }

            localStorage.setItem(id, str);

            tasksList.innerHTML += `
                        <div class="task" data-id = ${id}>
                            <div class="task__title">
                                ${str}
                            </div>
                            <a href="#" class="task__remove">&times;</a>
                        </div>`;
        }
    }
}

document.onclick = function (e) {
    if (localStorage.length > 0) {

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (e.target.parentElement.dataset.id == key) {
                localStorage.removeItem(key);
            }
        }
    }
    
    if (e.target.parentElement.className == 'task') {   
        e.target.parentElement.remove();
    }
}