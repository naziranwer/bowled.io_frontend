# Taskify

Taskify is a task management application that allows users to manage their tasks effectively. It supports user authentication, task creation, updating, deletion, drag-and-drop functionality for tasks, and search functionality with debouncing for efficient search operations.

## Features

- **User Authentication:** Secure login and logout functionality using JWT.
- **Task Management:**
  - Create new tasks with a title, description, due date, and status.
  - Update existing tasks.
  - Delete tasks with confirmation.
- **Task List Organization:**
  - Tasks are organized into three categories: To-Do, In Progress, and Completed.
  - Drag and drop tasks from one category to another.
- **Search Functionality:**
  - Search for tasks by title or description.
  - Debouncing implemented for efficient search operations.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/naziranwer/bowled.io_frontend.git
   cd bowled.io_frontend
   ```
2. npm install
3. Set up environment variables:
   ```Create a .env file in the root directory and add the following environment variables:
   REACT_APP_API_URL=<your-api-url>
   ```
4. Start the development server: npm start

## Usage

### Authentication

- **Login:**

  1. Navigate to the login page.
  2. Enter your username and password.
  3. Click the "Login" button to authenticate.

- **Logout:**
  1. Click the "Logout" button in the header.
  2. You will be redirected to the login page.

### Task Management

- **Create Task:**

  1. Click the "Create New Task" button on the Home Page.
  2. A modal form will appear where you can enter task details:
     - Title
     - Description
     - Due Date
     - Status (To-Do, In Progress, Completed)
  3. Click the "Create" button to save the new task.

- **Update Task:**

  1. Locate the task card you want to update.
  2. Click the edit icon on the task card.
  3. A modal form will appear with the current task details.
  4. Make the necessary changes and click the "Update" button to save the changes.

- **Delete Task:**
  1. Locate the task card you want to delete.
  2. Click the delete icon on the task card.
  3. A confirmation prompt will appear.
  4. Click "OK" to confirm the deletion, or "Cancel" to abort.

### Task List Organization

- **To-Do, In Progress, Completed:**

  - Tasks are organized into these three categories.
  - Tasks are displayed under each category based on their status.

- **Drag and Drop:**
  1. You can drag and drop tasks from one category to another.
  2. Drag a task card by clicking and holding the task.
  3. Drop it into the desired category column.
  4. The task's status will be updated automatically.

### Search Functionality

- **Search Bar:**

  1. A search bar is available to filter tasks by title or description.
  2. Enter your search query in the search bar.

- **Debouncing:**
  1. The search functionality uses debouncing to delay the search by 2 seconds for efficient operations.
  2. This reduces the number of search requests sent while typing.

## License

This project is licensed under the MIT License -

## Contributing

Feel free to open issues or submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/YourFeature

   ```

3. Make your changes and commit them: git commit -am 'Add new feature'
4. Push to the branch: git push origin feature/YourFeature
5. Create a new Pull Request.

## Contact

For any inquiries, please contact : anwernazir674@gmail.com
