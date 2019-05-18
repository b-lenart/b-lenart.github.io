const allTasks = document.querySelectorAll('.single-task');
const userContainers = document.querySelectorAll('.task-container');
const mainTaskCont = document.querySelector('#task-pool');

const user1cont = document.querySelector('#user1-cont');
const user2cont = document.querySelector('#user2-cont');
const user3cont = document.querySelector('#user3-cont');

const addTask = document.querySelector('.add-task');
const newTaskValue = document.querySelector('.new-task-value');

//initial task container data

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

// set local storage data to mainContainer object at first, 
// then use localStorage data if it's provided

if (localStorage.getItem('activatedTaskApp') !== 'activated') {
    localStorage.setItem('taskAppData', JSON.stringify(mainContainer));
}

let storageData = JSON.parse(localStorage.getItem('taskAppData'));

// add new task

addTask.addEventListener('click', () => {
    storageData.tasks.push({
        id: `task${storageData.tasks.length}`,
        text: newTaskValue.value,
        container: 'task-pool'
    })
    localStorage.setItem('taskAppData', JSON.stringify(storageData));
    localStorage.setItem('activatedTaskApp', 'activated');
    newTaskValue.value = '';
    createFromStorage();
    mainTaskCont.scrollTop = mainTaskCont.scrollHeight;
})

// create elements in their containers based on localStorage data

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
        document.querySelector(`#${storageData.tasks[task].container}`).appendChild(taskCont);

        taskCont.addEventListener('dragstart', dragStart);
        taskCont.addEventListener('dragend', dragEnd);
    }
}
createFromStorage();

// task event listeners

for (const task of allTasks) {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
}

for (let i = 0; i < allTasks.length; i++) {
    allTasks[i].setAttribute('id', `task${i}`);
}

for (const task of allTasks) {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
}

for (const cont of userContainers) {
    cont.addEventListener('dragover', dragOver);
    cont.addEventListener('dragenter', dragEnter);
    cont.addEventListener('dragleave', dragLeave);
    cont.addEventListener('drop', onDrop);
}

// drag and drop functions

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    this.classList.add('hold');
    setTimeout(() => this.classList.add('invisible'), 0);
}

function dragEnd() {
    this.className = 'single-task';
}

const whiteBar = document.querySelector('.white-mobile-bar');
const topScrollMobileBar = document.querySelector('.top-scroll-mobile-bar');
whiteBar.addEventListener('dragover', whiteBarOver);
whiteBar.addEventListener('dragleave', whiteBarLeave);

topScrollMobileBar.addEventListener('dragover', topScrollMobileBarOver);
topScrollMobileBar.addEventListener('dragleave', topScrollMobileBarLeave);

// allow scroll on mobile devices when dragging elements

function whiteBarOver(e) {
    e.preventDefault();
    window.scrollBy(0, 5);
}
function whiteBarLeave(e) {
    window.scrollBy(0, 0);
}
function topScrollMobileBarOver(e) {
    e.preventDefault();
    window.scrollBy(0, -5);
}
function topScrollMobileBarLeave(e) {
    window.scrollBy(0, 0);
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave(e) {
    this.className = 'task-container';
}

// set localStorage data on element drop
// and append element to container

function onDrop(e) {
    let data = e.dataTransfer.getData('text/plain');
    e.preventDefault();
    this.appendChild(document.getElementById(data));
    this.classList.remove('hovered');
    for (let i = 0; i < storageData.tasks.length; i++) {
        if (storageData.tasks[i].id == data) {
            storageData.tasks[i].container = this.id;
        }
    }
    localStorage.setItem('activatedTaskApp', 'activated');
    localStorage.setItem('taskAppData', JSON.stringify(storageData));
}

//clear storage and reload

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})