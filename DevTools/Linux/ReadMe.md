# [Getting Started with Linux](./Resources/Docs/Ubuntu%20Server%20CLI%20cheat%20sheet%202024%20v6.pdf)

## Help!?

```shell
command --help
```

Manuals

```shell
man command
```

## Terminal

- Get shit done without any bs.
- `CTRL + D` or, `exit` to escape anytime.)

## Shells

- Works between the terminal and the OS's kernel (like an API to the kernel)
- Bourne Again Shell ( bash )
- powershell ( pwsh )
- [zsh](https://ohmyz.sh)
- fish
- C Shell ( csh )

<img src="./Resources/memes/linux_in_a_nutshell.jpg" alt="Linux Intro" width=540>

## File System Navigation

List items

```shell
ls
```

Optional tags

`-l` `-al`

## Print working directory

```shell
pwd
```

## Random bits.)

- `case-sensitive`
- use `TAB`

## Change Directory

```shell
cd Downloads
```

<!-- ![cd downloads result](./Resources/memes/cd_downloads.jpg) -->
<img src="./Resources/memes/cd_downloads.jpg" alt="not found" width=450>

## Go back

```shell
cd ..
```

Hop between path/directories

```shell
cd -
```

## Go home

```shell
cd
```

Or,

```shell
cd ~
```

## Working with Files & Directories

## Create a file

```shell
touch filename.extension
```

## Create a Directory

```shell
mkdir directory-name
```

## Multiple directories

```shell
mkdir directory1 directory2 directory3
```

## Nested directories

```bash
mkdir someDir/oneDir/anotherDir -p
```

## Show file contents

```shell
cat filename.extension
```

With index

```shell
cat -n filename
```

## Write & Save

```shell
echo "Write something here" > filename.extension
```  

## Write & Save to an *existing file*

```shell
echo "Write something here" >> filename.extension
```  

## Move file

```shell
mv this_file.extension to-this-directory
```

## Move Directory

```shell
mv move-this-directory to-this-directory
```

## Copy file's contents to another file

```shell
cp this_file.extension to_this_file.extension
```

## Copy file's contents to another Directory's File

```shell
cp this_file.extension to-this-directory/then_to_this_file.extension
```

## Remove a file

```shell
rm filename.extension
```

## Remove a Directory

```shell
rm -r directory-name
```

## **Remove Everything** *recursively*

- `Be careful` while using this one!
- Never run this command on `root` ( / ) or, it'll destroy the entire operating system!

```shell
rm -r *
```

## Nano

```shell
nano filename.extension
```

- Edit file, if it's not found, it creates a new file
- Write & CTRL + O, to write out & press enter to confirm
- CTRL + X, exit nano...

## Vim

While at it, use *neovim* instead.

```shell
vim filename.extension
```

```shell
nvim filename.extension
```

- press `i` to insert & write...
- `ESC` to exit insert mode
- `:wq` to Write & Quit
- `:q` to Quit

<!-- ![Choosing an Editor](./Resources/memes/choosing_an_editor.jpg) -->
<img src="./Resources/memes/choosing_an_editor.jpg" alt="Choosing an editor" width=450>

## Network Management

- press `q` to quit or, `CTRL + C` to cancel.

## Status

```shell
networkctl status
```

## IP & MAC

- Requires `net-tools`

```shell
ifconfig
```

```shell
networkctl status
```

```shell
ip route
```

## FirewallS

- **ufw**

## Enable

```shell
sudo ufw enable
```

## Firewall Status

```shell
sudo ufw status
```

## Allow permissionS

```shell
sudo ufw allow port_number
```

![Firewall in a nutshell](./Resources/memes/firewall.jpg)

## SSH

- Connect to a system/server through `ssh`
- Replace `192.168.0.103` with your `Server's IP`

```shell
ssh username@your_server_ip
```

Like,

```shell
ssh sam@192.168.0.103
```

## Allow SSH's port `22` to start listening for incoming connections

- if you're using a firewall that is, `ufw`

```shell
sudo ufw allow 22
```

## APT: The Package Manager

- *Debian/Ubuntu* Systems

## Search for a packages

```shell
apt search package-name
```

## Install a package

```shell
sudo apt install package-name
```

## Remove a package

```shell
sudo apt remove package-name
```

## Remove *unnecessary/cached* packages

```shell
sudo apt autoremove
```

## Getting started *packages*

- htop
- bpytop
- neofetch
- screenfetch
- vim
- git
- espeak
- figlet
- curl
- wget
- tree
- mlocate
- terminator
- vlc
- python3
- python3-pip
- python3-pyaudio
- postgresql
- nodejs
- net-tools
- ufw
- ssh
- tor
- proxychains
- wireshark
- gnome-clocks
- gnome-todo
- gnome-tweaks
- thunar
- dolphin
- libreoffice
- gimp
- android-tools-adb
- android-tools-fastboot
- sl ( Train Animation* )
- docker

<!-- ![What you see isn't all there is](./Resources/memes/what_you_see_isnt_all_there_is_.jpg) -->

## Install a snap package

`snap:` The ubuntu package manager

- *--classic* *if required

```shell
sudo snap install package-name
```

```shell
sudo snap install package-name --classic
```

## List the changes associated with the snap

```shell
snap changes package-name
```

```shell
snap changes nextcloud
```

## Info about the snap

```shell
snap info package-name
```

```shell
snap info nextcloud
```

## Snap Connections

```shell
snap connections package-name
```

```shell
snap connections nextcloud
```

## Remove a snap package

```shell
sudo snap remove package-name
```

## Getting started *snap-packages*

- code  (VS Code)
- spotify (*--classic*)
- postman
- chromium
- firefox
- nextcloud
- pycharm
- microk8s

## Installing a `.deb` package

- *Debian/Ubuntu* Systems

## Give a package `executable` permission

```shell
chmod +x package-name
```

## Install a package

```shell
sudo apt install ./Resources/memes/package-name.deb
```

## pacman: The Package Manager

- *Arch* based systems
- *AUR*, another way to install packages on Arch based systems

<!-- ![I use Arch btw](./Resources/memes/i_use_arch_btw.jpg) -->
<img src="./Resources/memes/i_use_arch_btw.jpg" alt="i use arch btw*" width=450>

## Update & Upgrade

```shell
sudo pacman -Syu
```

## Install an arch package

```shell
sudo pacman -Sy package-name
```

```shell
sudo pacman -S package-name
```

## Remove an arch package

```shell
sudo pacman -R package-name
```

## Remove a package along with its dependencies

```shell
sudo pacman -Rs package-name
```

## DNF: The Package Manager

- *Fedora* based systems ( Red Hat, RHEL )
- Successor to *YUM*

## Update & Upgrade

```shell
sudo dnf update
```

```shell
sudo dnf upgrade
```

## Search a package

```shell
dnf search package-name
```

## Install a package

```shell
sudo dnf install package-name
```

## Remove a package

```shell
sudo dnf remove package-name
```

## Clear package cache

```shell
sudo dnf autoremove
```

## Installing a *.rpm* package

- Fedora/RHEL Systems

## *Executable permissions

```shell
chmod +x package-name
```

## Install the package

```shell
sudo dnf install ./Resources/memes/package-name.rpm
```

## System Management

## Date & Time

```shell
date
```

## Uptime

```shell
uptime
```

## Reboot

```shell
reboot
```

```shell
sudo reboot
```

## Power Off/Shutdown

```shell
poweroff
```

```shell
sudo poweroff
```

## Run the previous command w/ *superuser*

```shell
sudo !!
```

Or, use `the-fuck`

## Update

```shell
sudo apt update
```

## Upgrade

```shell
sudo apt upgrade
```

## Update & Upgrade

- `-y` for auto-confirmation

```shell
sudo apt update && sudo apt upgrade
```

```shell
sudo apt update ; sudo apt upgrade -y
```

## Switch to superuser

<!-- ![the responsibility](./Resources/memes/with_great_power_comes_great_responsibility.jpg) -->
<img src="./Resources/memes/with_great_power_comes_great_responsibility.jpg" alt="With great power comes..." width=450>

```shell
sudo su
```

## System status

- press `q` to quit

```shell
systemctl status
```

## Date-Time

```shell
timedatectl status
```

## `System` information

```shell
uname -a
```

# Disks

- Use `Disks` application for disk management   ( GUI )

```shell
df -h
```

```shell
lsblk
```

`TIP:` Choose the disk's name carefully!

## Mount

```shell
sudo mkdir /mnt/external
```

```shell
sudo mount /dev/sdX1 /mnt/external
```

## Navigate to the disk

```shell
cd /mnt/external
```

## Unmount the disk

```shell
umount /mnt/external
```

## Auto-Mount Functionality*

- Replace `ext4` with your disk format like... `ntfs` `btrfs` `exfat` `fat32` in the following...

```shell
sudo vim /etc/fstab
```

## Write the follwing inside the file

```shell
/dev/sdX1 /mnt/external ext4 defaults 0 0
```

## Random bits, Pt-II

- Use `TAB` for auto-completion
- press `CTRL + C` to cancel an ongoing operation
- `CTRL + D` to quit
- `CTRL + SHIFT + C` to copy something from the terminal
- `CTRL + SHIFT + V` to paste something to the terminal

## Help?

```shell
command --help
```

```shell
man command
```

## List of Main Commands

```shell
command --help
```

## Wipe the System

Fuck the system beyond recovery, unless you're running a *VM* .)

- Wipes the entire system!

```shell
sudo rm -rf /*

```

![Did you experience fear?](./Resources/memes/fear.jpg)

With time, you'll get used to it...

## PowerShell

- `Windows` Systems
- It's like if `cmd` & `bash` had a child ;)
- In a general sense, it's `not case-sensitive`!

## winget: The Windows Package Manager

## Search

```shell
winget search package-name
```

```shell
winget search vscode
```

## Install a winget package

```shell
winget install author.package-name
```

```shell
winget install Microsoft.VisualStudioCode
```

`Tip:` Here, smallcase works too.)

```shell
winget install microsoft.visualstudiocode
```

## `Create` a file

```shell
ni filename.extension
```

## Remove some file

```shell
rm filename.extension
```

## `Create` some directory

```shell
mkdir directory-name
```

## Remove some directory

```shell
rm directory-name
```

## Remove some directory forcefully*

```shell
rm -r -fo directory-name
```

![Was the use of force necessary?](./Resources/memes/use_of_force.jpg)

Until next time.)
