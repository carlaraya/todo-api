# TODO API Documentation
The app is hosted in [https://devcamp1819b.herokuapp.com/](https://devcamp1819b.herokuapp.com/).

## Task Model Fields
1. name
    * The task name. Type of String. Required when creating.
2. done
    * Whether a task is done or not. Type of Boolean. Optional when creating (Default to zero).
3. notes
    * Task notes. Type of String. Required when creating.
4. priority
    * The priority of current task. Type of Integer. Required when creating.

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
