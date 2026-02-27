const sampleData = [
  {
    "title": "Get All Employees",
    "difficulty": "Easy",
    "description": "Retrieve all employees from the employees table.",
    "question": "Write a SQL query to select all columns from the employees table."
  },
  {
    "title": "Employees from IT Department",
    "difficulty": "Easy",
    "description": "Find employees who work in the IT department.",
    "question": "Write a SQL query to get all employees where department is 'IT'."
  },
  {
    "title": "Employees with Salary Greater Than 50000",
    "difficulty": "Easy",
    "description": "Filter employees earning more than 50000.",
    "question": "Write a SQL query to get employees whose salary is greater than 50000."
  },
  {
    "title": "Select Only Names and Emails",
    "difficulty": "Easy",
    "description": "Retrieve only name and email columns.",
    "question": "Write a SQL query to select only name and email from the employees table."
  },
  {
    "title": "Employees Sorted by Salary Descending",
    "difficulty": "Medium",
    "description": "Sort employees by highest salary first.",
    "question": "Write a SQL query to get all employees ordered by salary in descending order."
  },
  {
    "title": "Count Total Employees",
    "difficulty": "Medium",
    "description": "Find total number of employees.",
    "question": "Write a SQL query to count total number of employees."
  },
  {
    "title": "Average Salary",
    "difficulty": "Medium",
    "description": "Calculate average salary of all employees.",
    "question": "Write a SQL query to calculate the average salary of employees."
  },
  {
    "title": "Department Wise Employee Count",
    "difficulty": "Medium",
    "description": "Count employees in each department.",
    "question": "Write a SQL query to count number of employees in each department."
  },
  {
    "title": "Highest Salary Employee",
    "difficulty": "Hard",
    "description": "Find the employee(s) with the highest salary.",
    "question": "Write a SQL query to get the employee(s) who have the maximum salary."
  },
  {
    "title": "Employees Between Salary Range",
    "difficulty": "Hard",
    "description": "Filter employees whose salary is between 40000 and 60000.",
    "question": "Write a SQL query to get employees whose salary is between 40000 and 60000."
  },
   {
    "title": "Distinct Departments",
    "difficulty": "Easy",
    "description": "Get all unique department names from the employees table.",
    "question": "Write a SQL query to retrieve distinct department names from employees."
  },
  {
    "title": "Employees Not in IT",
    "difficulty": "Easy",
    "description": "Find employees who are not in the IT department.",
    "question": "Write a SQL query to get employees whose department is not 'IT'."
  },
  {
    "title": "Top 3 Highest Paid Employees",
    "difficulty": "Medium",
    "description": "Retrieve top 3 employees based on highest salary.",
    "question": "Write a SQL query to get top 3 employees with highest salary."
  },
  {
    "title": "Second Highest Salary",
    "difficulty": "Hard",
    "description": "Find the second highest salary in the company.",
    "question": "Write a SQL query to retrieve the second highest salary from employees."
  },
  {
    "title": "Employees with Gmail Accounts",
    "difficulty": "Medium",
    "description": "Find employees whose email ends with '@gmail.com'.",
    "question": "Write a SQL query to retrieve employees whose email ends with '@gmail.com'."
  },
  {
    "title": "Department Wise Average Salary",
    "difficulty": "Medium",
    "description": "Calculate the average salary for each department.",
    "question": "Write a SQL query to calculate average salary grouped by department."
  },
  {
    "title": "Departments Having More Than 2 Employees",
    "difficulty": "Hard",
    "description": "Find departments where employee count is greater than 2.",
    "question": "Write a SQL query to get departments having more than 2 employees."
  },
  {
    "title": "Employees Whose Name Starts With 'S'",
    "difficulty": "Medium",
    "description": "Retrieve employees whose names start with letter 'S'.",
    "question": "Write a SQL query to find employees whose name starts with 'S'."
  },
  {
    "title": "Employees Whose Salary Is Above Department Average",
    "difficulty": "Hard",
    "description": "Find employees earning more than the average salary of their department.",
    "question": "Write a SQL query to retrieve employees whose salary is greater than the average salary of their department."
  },
  {
    "title": "Total Salary Expense",
    "difficulty": "Medium",
    "description": "Calculate total salary paid to all employees.",
    "question": "Write a SQL query to calculate total salary of all employees."
  },
  {
    "title": "Lowest Salary Employee",
    "difficulty": "Medium",
    "description": "Find the employee(s) with the lowest salary.",
    "question": "Write a SQL query to retrieve employee(s) having minimum salary."
  },
  {
    "title": "Employees in Finance or HR",
    "difficulty": "Easy",
    "description": "Find employees working in Finance or HR department.",
    "question": "Write a SQL query to retrieve employees whose department is either 'Finance' or 'HR'."
  },
  {
    "title": "Employees Ordered by Department and Salary",
    "difficulty": "Medium",
    "description": "Sort employees by department ascending and salary descending.",
    "question": "Write a SQL query to order employees by department (ASC) and salary (DESC)."
  },
  {
    "title": "Count Employees with Salary Above 50000",
    "difficulty": "Medium",
    "description": "Count employees earning more than 50000.",
    "question": "Write a SQL query to count employees whose salary is greater than 50000."
  },
  {
    "title": "Employees With Salary Equal to Maximum Salary",
    "difficulty": "Hard",
    "description": "Find employees whose salary matches the maximum salary in the table.",
    "question": "Write a SQL query to retrieve employees whose salary is equal to the maximum salary."
  }
];

module.exports = sampleData;

