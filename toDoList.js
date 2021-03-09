// To Do List Mini Project


let input = prompt('What would you like to do?'); 
const toDoList = ['Collect eggs', 'Clean Cat Litter Box'];

while(input !== 'quit' && input !== 'q'){

    if (input === 'list'){
        console.log('*****************')
            for(let i = 0; i < toDoList.length; i++){
                (console.log(`${i}: ${toDoList[i]}`));
            }
        console.log('*****************');
        break;
    } else if (input === 'new'){
        const newToDo = prompt('What toDo would you like to add?');
        toDoList.push(newToDo);
        console.log(`${newToDo} added to the list`);
        break;
    } else if (input === 'delete'){
        const index = parseInt(prompt('What index would you like to delete'));
        toDoList.splice(index, 1);
        console.log(index);
        break;
    }

    input = prompt('What would you like to do?');
}

console.log('You have quit the toDo List!');

