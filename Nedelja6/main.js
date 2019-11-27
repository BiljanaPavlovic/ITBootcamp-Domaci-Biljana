import { TaskList } from "../components/taskList";
import { InputForm } from "../components/inputForm";
import { Task } from "../components/task";
import { getToDo, addToDo, deletToDo } from "../utilities/todo-service";
import { Login } from "../components/logInForma";

class Main {
    constructor() {
        let inputForm = new InputForm();
        let taskList = new TaskList();
        let loginForm = new Login();

        this.node = document.createElement('main');
        this.node.appendChild(inputForm.getNode());
        this.node.appendChild(loginForm.getNode());
        this.node.appendChild(taskList.getNode());
        inputForm.setBtnAddOnClick(function () {
            let text = inputForm.txtTitle.value;
            text = text.trim();

            if (text == '') return;

            
            let task = new Task(text);
            task.setBtnDeleteClickEvent(() => {
                task.deleteItem();
            });
            taskList.addTask(task);
            addToDo(loginForm.username, text);
            inputForm.txtTitle.value='';
            
        });
        
        
        
        loginForm.btnAddClickEventListener(() => {
            taskList.emptyList()
            getToDo(loginForm.username).then(data => {
                let items = data.items;
                items.forEach(item => {
                    let task = new Task(item.title);
                    task.setBtnDeleteClickEvent(() => {
                        task.deleteItem();
                    })
                    
                    taskList.addTask(task);
                   deletToDo(loginForm.username, task);
                   

                });
            })
            loginForm.txtTitle.value='';
        })

    }
    getNode() {
        return this.node;
    }

}

export {
    Main
}