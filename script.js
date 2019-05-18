const allTasks = document.querySelectorAll('.single-task');
const userContainers = document.querySelectorAll('.task-container');
const mainTaskCont = document.querySelector('#task-pool');

const user1cont = document.querySelector('#user1-cont');
const user2cont = document.querySelector('#user2-cont');
const user3cont = document.querySelector('#user3-cont');

const addTask = document.querySelector('.add-task');
const newTaskValue = document.querySelector('.new-task-value');

//initial task container localstorage info

let mainContainer = {
    tasks: [
        {
            id: 'task0',
            text: 'Task1',
            container: 'task-pool'
        },
        {
            id: 'task1',
            text: 'Task2',
            container: 'task-pool'
        },
        {
            id: 'task2',
            text: 'Task3',
            container: 'task-pool'
        },
        {
            id: 'task3',
            text: 'Task4',
            container: 'task-pool'
        },
        {
            id: 'task4',
            text: 'Task5',
            container: 'task-pool'
        },
        {
            id: 'task5',
            text: 'Task6',
            container: 'task-pool'
        },
        {
            id: 'task6',
            text: 'Task7',
            container: 'task-pool'
        },
        {
            id: 'task7',
            text: 'Task8',
            container: 'task-pool'
        },
        {
            id: 'task8',
            text: 'Task9',
            container: 'task-pool'
        },
        {
            id: 'task9',
            text: 'Task10',
            container: 'task-pool'
        },
        {
            id: 'task10',
            text: 'Task11',
            container: 'task-pool'
        },
        {
            id: 'task11',
            text: 'Task12',
            container: 'task-pool'
        },
        {
            id: 'task12',
            text: 'Task13',
            container: 'task-pool'
        },
        {
            id: 'task13',
            text: 'Task14',
            container: 'task-pool'
        },
        {
            id: 'task14',
            text: 'Task15',
            container: 'task-pool'
        },
    ]
}

// localStorage.setItem('taskAppData', '');
if (localStorage.getItem('activatedTaskApp') !== 'activated') {
    localStorage.setItem('taskAppData', JSON.stringify(mainContainer));
}

let storageData = JSON.parse(localStorage.getItem('taskAppData'));

addTask.addEventListener('click', () => {
    storageData.tasks.push({
        id: `task${storageData.tasks.length}`,
        text: newTaskValue.value,
        container: 'task-pool'
    })
    localStorage.setItem('taskAppData', JSON.stringify(storageData));
    console.log('storage data: ' + storageData);
    localStorage.setItem('activatedTaskApp', 'activated');
    newTaskValue.value = '';
    createFromStorage();
    mainTaskCont.scrollTop = mainTaskCont.scrollHeight;
})

// mainContainer.tasks = storageData;
// if (localStorage.getItem('activatedTaskApp') == 'activated') {
// if (storageData !== '') {
function createFromStorage() {
    mainTaskCont.innerHTML = '';
    user1cont.innerHTML = '';
    user2cont.innerHTML = '';
    user3cont.innerHTML = '';
    for (const task in storageData.tasks) {
        let taskCont = document.createElement('div');
        taskCont.classList.add('single-task');
        taskCont.setAttribute('draggable', 'true');
        taskCont.setAttribute('id', storageData.tasks[task].id);
        taskCont.innerHTML = storageData.tasks[task].text;
        // storageData.tasks[task].container.appendChild(taskCont);
        document.querySelector(`#${storageData.tasks[task].container}`).appendChild(taskCont);

        taskCont.addEventListener('dragstart', dragStart);
        taskCont.addEventListener('dragend', dragEnd);
    }
}
createFromStorage();

// }

for (const task of allTasks) {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
}

for (let i = 0; i < allTasks.length; i++) {
    allTasks[i].setAttribute('id', 'task' + i);
}

// task listeners

// task.addEventListener('dragstart', dragStart);
// task.addEventListener('dragend', dragEnd);

for (const task of allTasks) {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
}

//Loop through emties and call drag events

for (const cont of userContainers) {
    cont.addEventListener('dragover', dragOver);
    cont.addEventListener('dragenter', dragEnter);
    cont.addEventListener('dragleave', dragLeave);
    cont.addEventListener('drop', onDrop);
}

for (const task of allTasks) {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
}

//Drag Functions
function dragStart(e) {
    // this.classList.add('hold');
    e.dataTransfer.setData('text/plain', e.target.id);
    console.log('dragStart e.target: ' + e.target);
    this.classList.add('hold');
    setTimeout(() => this.classList.add('invisible'), 0);
    // setTimeout(function () { this.classList.add('invisible') }, 0);
}

function dragEnd() {
    this.className = 'single-task';
}

const whiteBar = document.querySelector('.white-mobile-bar');
whiteBar.addEventListener('dragover', whiteBarOver);
function whiteBarOver(e) {
    e.preventDefault();
    // console.log('over');
    window.scrollTo(500, 1000);
}

function dragOver(e) {
    e.preventDefault();
    // console.log('over');

}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
    console.log('enter');
}

function dragLeave(e) {
    // console.log('dragLeave e.target: ' + e.target.innerHTML);
    this.className = 'task-container';
    console.log('leave');
}

function onDrop(e) {
    let data = e.dataTransfer.getData("text/plain");
    // e.target.textContent = data;
    e.preventDefault();
    // console.log('dragDrop e.target: ' + e.target);
    // this.className = 'task-container';
    this.appendChild(document.getElementById(data));
    this.classList.remove('hovered');
    // mainContainer.tasks[task].id
    for (let i = 0; i < storageData.tasks.length; i++) {
        if (storageData.tasks[i].id == data) {
            console.log('num of task - 1: ' + i);
            storageData.tasks[i].container = this.id;
            console.log('storageData from onDrop: ' + storageData);
            console.log(this.id);
        }
    }
    localStorage.setItem('activatedTaskApp', 'activated');
    localStorage.setItem('taskAppData', JSON.stringify(storageData));
    // console.log('drop');
    console.log('onDrop-this-id:', this.id);
    console.log('onDrop-data:', data);
}


//clear storage

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})