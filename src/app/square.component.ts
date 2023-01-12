import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.component';

@Component({
    selector: 'app-square',
    template: `
         <div class="todos">

        <form (submit)="addTodo()">
		<input 
			type="text"
			name="inputTodo"
			placeholder="Enter todo..."
			class="todo-input"
			[(ngModel)]="inputTodo"
		/>
		<input type="submit" value="Add Todo" class="todo-submit" />
	    </form>
           
            <div *ngFor="let todo of todos; let i = index;" class="todo {{todo.completed ? 'done': ''}}">
                <div class="id">{{i}}</div>
                <div class="content" (click)="toggle(i)">{{todo.content}}</div>
                <button class="delete" (click)="deleteTodo(i)">Remove</button>
            </div>
         </div>
    `,
    styleUrls: ['./todos.component.css']
})

export class SquareComponent implements OnInit{


    todos!:Todo[];

    inputTodo: string = "";

    constructor(){}

    ngOnInit(): void {
        
        this.todos = [
            {
                content: "First todo",
                completed: false
            },
            {
                content: "Second todo",
                completed: false
            },
        ]
    }
    toggle (id: any){

        this.todos.map((v,i) =>{

            if(i==id) v.completed = !v.completed;

            return v;
        })
    }
    deleteTodo (id:number) {
        this.todos = this.todos.filter((v, i) => i !== id);
      }
    
      addTodo () {
        this.todos.push({
          content: this.inputTodo,
          completed: false
        });
    
        this.inputTodo = "";
      }
}