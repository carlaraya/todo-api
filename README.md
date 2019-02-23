# TODO API Documentation
Code: [https://github.com/carlaraya/todo-api](https://github.com/carlaraya/todo-api)

Server: [https://devcamp1819b.herokuapp.com/](https://devcamp1819b.herokuapp.com/)

## Task Model Fields

| Field     | Description                         | Type    | Required when creating?      |
|-----------|-------------------------------------|---------|------------------------------|
| name      | The task name                       | String  | Yes                          |
| done      | Whether a task is done or not       | Boolean | No (defaults to false)       |
| notes     | Notes about the task                | String  | No                           |
| priority  | Priority of the task                | Number  | Yes                          |
| createdAt | Timestamp when task is created      | Date    | No (automatically generated) |
| updatedAt | Timestamp when task is last updated | Date    | No (automatically generated) |

## API Endpoints

### GET /
* Show documentation.

### GET /tasks/
* Get all tasks.

### GET /tasks/done
* Get all done tasks.

### GET /tasks/undone
* Get all undone/in-progress tasks.

### GET /tasks/:id
* Get task by id

### POST /tasks/
* Create new task, with model specified above passed as form fields.

### PATCH /tasks/:id
* Edit task by id, with edits passed as form fields.

### DELETE /tasks/:id
* Delete task by id.
