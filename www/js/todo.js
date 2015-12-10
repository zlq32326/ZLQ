angular.module('todoApp', []).controller('TodoListController', function(){
  var todoList;
  todoList = this;
  todoList.todos = [];
  todoList.addTodo = function(){
    todoList.todos.push({
      text: todoList.todoText,
      done: false
    });
    todoList.todoText = '';
  };
  todoList.remaining = function(){
    var count;
    count = 0;
    angular.forEach(todoList.todos, function(todo){
      var ref$;
      return count += (ref$ = todo.done) != null
        ? ref$
        : {
          0: 1
        };
    });
    return count;
  };
  todoList.archive = function(){
    var oldTodos;
    oldTodos = todoList.todos;
    todoList.todos = [];
    angular.forEach(oldTodos, function(todo){
      if (!todo.done) {
        return todoList.todos.push(todo);
      }
    });
  };
});