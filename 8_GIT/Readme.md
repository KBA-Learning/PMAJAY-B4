# Git and GitHub Basics


## Getting Started

**Install Git ** - Ubuntu usually comes with git. incase if you dont have, install it by using the following command,

1. To check whether git is installed on the system, this will show the current git version.
```bash
git --version
```
2. To install git using apt 
```bash
sudo apt install git
```
3. **Set Up Git**: Configure your Git username and email using the following commands:
```bash
git config --global user.name "Your Github UserName"
git config --global user.email "your Github email"
```

4. **SSH Key Configuration**
```
ssh-keygen -t ed25519 -C "recognizable tag" //Replace the recognizable tag with whatever you like
```
```
eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519

cat ~/.ssh/id_ed25519.pub
```
#### Copy from ssh to the last (without tag).

Now go to the settings and select ssh and gpg keys and paste this key.

Now if you clone using ssh. It will automatically be cloned to your local sytem.


####Git Commands

1. Initialize git in a directory/folder
```bash
git init
```
2. Stage the changes
```bash
git add <file name> #use this to add by file name
git add . # use this for adding all the changes to staging area
```
3. Commit the changes
```bash
git commit -m "<add your commit message here>"
```

4. push to the repo
```bash
git push
```
5. pull from the remote repo
```bash
git pull 
```



