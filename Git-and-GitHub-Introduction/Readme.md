# [Introduction to Git & GitHub](./Resources/gettingStartedWithGit-ZTM.pdf)

A list of basic `git` commands can be found [here...!](./Resources/git-cheat-sheet-GitHub.pdf)

- `Git`: A popular open source distributed version control system

- `Github`: A web-based hosting service for version control using git

- `GitLab`: A web-based DevOps lifecycle tool with a git repository manager


## Clone a repository
```shell
git clone <URL>
```

## Install using `winget`
```shell
winget install git.git
```

## Install using `brew`
```shell
brew install git
```

## Install using `apt`
```shell
sudo apt install git
```

## Install using `dnf`
```shell
sudo dnf install git 
```

## Install using `pacman`
```shell
sudo pacman -S git
```

## Initialize a git repository (`repo`)
```shell
git init
```

## `Configure` git user & email
```shell
git config --global user.name "Your Name"
```
```shell
git config --global user.email "youremail@abc.xyz"
```

## Create a `new-branch` and switch
```shell
git branch -M new-branch
```

## `Status` of the repository
```shell
git status
```
## Fetch upstream & status
```shell
git pull ; git status
```

## Add files `--all`
```shell
git add .
```

## Commit files
![git commit -m "WHAT"?](./Resources/memes/gitCommit-m___.png)
```shell
git commit -m "Getting Started"
```
## ;)

## `Push` changes
```shell
git push origin new-branch
```

### `Reminder`: Don't fall for this... lol ;)
![](./Resources/memes/gitWorkflow-LOL.png)

## Recover/Restore a deleted file
```shell
git restore <filename.extension>
```

## Access git `logs`
```shell
git log
```

## `Be careful` while using this one...
![git push origin main --force](./Resources/memes/gitPushOriginMain--force.jpg)
```shell
git push origin main --force
```

`NOTE`: `main` & `master` branches are the same but the conventions have changed... new repositories defaults to the `main` branch. 

## Until next time...

# ;)
