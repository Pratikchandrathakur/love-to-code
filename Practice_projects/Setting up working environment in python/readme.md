# Lesson: Setting Up a Simple and Reproducible Development Environment
What is a Development Environment?
When you're working on a project, you use a development environment to write and test your code. 
A development environment includes everything you need to run your project, like the programming language, tools, and any extra software your code depends on.
If everyone working on the project has the same environment, it reduces problems like "it works on my computer, but not on yours."

In this lesson, we'll walk through how to set up a simple and reproducible development environment, so you and your teammates can all work with the same tools and settings,
no matter which computer you're using.

## Why Do You Need a Reproducible Environment?
Imagine you're working on a project with a friend. If your friend has different software versions or settings on their computer, the project might not work properly
for them—even though it works perfectly on your computer. A reproducible environment ensures that everyone is using the same setup, so the project runs the same way for everyone.

### Step 1: Version Control with Git
To keep track of changes to your code and make sure everyone is working with the same files, you’ll want to use a tool called Git.
Git allows you to save snapshots of your project as you go, and it makes sure everyone on the team has the same version of the code.

#### Getting Started with Git:
Install Git: If you don't have Git installed, go to git-scm.com and download it.
Create a Repository: Once Git is installed, you can turn any project folder into a repository (a place where Git tracks changes).
git init
This creates a Git repository in your project folder.

Track Changes: You can add your files to Git and commit (save) changes.

git add .
git commit -m "Initial commit"
﻿Share with Your Team: You can push your repository to a site like GitHub, so others can access it. Just sign up for a GitHub account,
 create a repository there, and follow their steps to push your project.

### Step 2: Using a Virtual Environment
When you're working with different projects, they might each need specific tools or versions of software. For example, one project might use Python version 3.8,
while another uses version 3.10. You can manage these differences with a virtual environment.

A virtual environment is like a separate workspace on your computer where you can install the exact versions of software you need for a project—without affecting other projects or your system.

#### Setting Up a Virtual Environment in Python:
Install Python: If you don’t already have Python installed, download it from python.org.
Create a Virtual Environment:
Open a terminal or command prompt and navigate to your project folder.
Run this command to create a virtual environment:
```
python -m venv venv
```
This creates a folder named venv that will hold your project’s environment.
#### Activate the Virtual Environment:
On Windows:
```
venv\Scripts\activate
```
On macOS/Linux:
```
source venv/bin/activate
```
Once activated, your terminal should show the virtual environment’s name at the beginning of the prompt, like this:

(venv) your-computer-name:your-project-folder user$


Install Project Dependencies: Now that your virtual environment is active, you can install any Python packages your project needs using the following command:
```
pip install <package-name>
```
For example:
```
pip install requests
```
### Step 3: Recording Your Project’s Dependencies
After you’ve installed the tools your project needs, you can save a list of them. This makes it easy for others to set up the same environment on their computers.

#### Save the List of Installed Packages:
```
pip freeze > requirements.txt
```
This creates a requirements.txt file that lists all the Python packages your project needs. Anyone who wants to run the project just has to use this file.

How Others Can Reproduce the Environment:
If someone else is working on the project, they can use your requirements.txt file to install the same packages in their own virtual environment.

They create and activate a virtual environment.
Then they run:
```
pip install -r requirements.txt
```
This command will install all the packages listed in requirements.txt, making sure their environment is the same as yours.

### Step 4: Sharing Environment Files with Git
When you're using Git to share your project, make sure you don’t accidentally upload unnecessary files (like the entire virtual environment folder). 
These files aren’t needed because others can create their own environments.

#### Create a .gitignore File:
A .gitignore file tells Git which files or folders it should ignore. For example, you don’t need to upload the virtual environment folder (venv), so you should add it to your .gitignore file.

In your project folder, create a new file named .gitignore, and add the following lines:

Copy code
```
venv/
```
Now, Git will ignore the venv folder, and only track the important files, like your code and requirements.txt.

### Step 5: Using Docker (Optional for Advanced Beginners)
If you want to take your reproducibility to the next level, you can use Docker. Docker packages your entire environment (including the operating system, tools, and your code) into a container. Containers make sure your project works the same way, no matter where you run it.

For this lesson, you don’t need to use Docker yet, but as you become more advanced, it’s a great tool to explore.

### Conclusion: Why Reproducibility is Important
By following these steps, you’ve set up a simple, reproducible development environment. This means that anyone working on your project can quickly install the right tools and versions, and your project will run the same way for everyone.

Here’s what you learned:

- Version control with Git: How to track your project’s files and changes.
- Virtual environments: How to create isolated spaces for each project’s tools.
- Dependency management: How to save and share the tools your project needs with requirements.txt.
- Collaboration: By sharing the project through Git and using virtual environments, your teammates can easily set up the same environment on their computers.
  
This setup makes it much easier for you and your team to collaborate, and it prevents many common problems that happen when working on different computers.
