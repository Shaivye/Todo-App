import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "MY TODO'S";
  todos=[{
    label: 'Complete lab assignment',
   
  },
{label: 'Buy groceries',

},
{label: 'Prepare for exam',

},
{label: 'Clean the house',

},

];
public count=4;
addTodo(newTodoLabel)
{
  var newTodo={
    label: newTodoLabel,
  
    
  };
  this.count++;
  this.todos.push(newTodo);
}
deleteTodo(todo){
  this.todos = this.todos.filter( t => t.label !== todo.label),
  this.count--;
}

}

