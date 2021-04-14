// Git
// Version control system designed to keep chronological timeline of all of your code changes.
/*To traverse file system in terminal:
cd name_of_folder moves you down
cd .. moves you up
ls lists items inside the folder
pwd specifies directory path you're currently in

To initiate a git repository
1) git init
2) Staging files for a commit - git add <file_name> OR git add . (to add all files in folder)
git status - tells us the status of our repository
git reset can convert back before committing to the repository if for some reason we don't want to commit all the files

To commit your changes, run the following:
git commit -m "type commit message here to provide short explanation of changes made" m equals modified files

To view the commit use git log
shows us commit hash, branch name, commit message, and other metadata

Go to GitHub.com and click Create Repository
Name our repository, make sure to leave public and keep all other options deselected
Clicke Create Repository
Copy the https url provided (one that ends with .git)
Go back to VSCode and link local repository with remote repository by typing:
git remote add origin <paste link>
git remote -v shows the link has been made between local and remote
To push to remote repository
git push origin master
*/