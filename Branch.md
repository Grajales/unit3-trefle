# Branch Instructions
The following instructions are from handwritten notes taken durin g Joseph mentoring us through this process.  any erros or omission are mine, please correct as needed, thanks.


## Git Set-up

my local machine has two branches for our Project 3 work:
1. a master local branch linked to the [remote master](https://github.com/PJTeel/unit3-birdapp/branches) - Owner: Paula Teel

1. local branch called: myName_local

## Step by step instructions

1. git branch
1. git checkout master
1. git pull // gets remote master changes
1. git checkout myName_local
1. git merge master // Brings in changes
1. git status // shows conflicted files
resolve conflicts in VS code by Accepting or Rejecting changes.  Remember to scroll all the way to the bottom of the file to get all changes.
1. git add .  // Add changes
1. git status // confirms no more adds needed
1. git commit -m "message"
1. git push origin myName_local
1. git remote -v
1. git checkout master
1. git merge myName_local
1. git push

