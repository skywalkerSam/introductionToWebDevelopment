# Introduction to Python
Getting started with Python, and beyond...

- [Python Basics - IBM](./Resources/python-basics-IBM.pdf)
- [Introduction to Python Whitepaper](./Resources/Python-Cheatsheet_Zero_To_Mastery_V1.04.pdf)


### Python in a nutshell ;)
![Programmers and Python lol](./Resources/memes/programmers-n-python.jpg)

...

## Setting up a Virtual Environment
- Use `python3` and `pip3` for Linux Systems

```shell
python -m venv venv
```

```shell
python -m venv env0
```


## Activate Environment

### Windows
```shell
.\Scripts\activate
```

### Linux/Mac
```shell
source bin/activate
```

### Deactivate Environment
```shell
deactivate
```


## Check Installed Packages

```shell
pip freeze
```

```shell
pip list
```


## Set Up Virtual Environment: `virtualenv`

### Check availability
```shell
virtualenv 
```

### Create environment
```shell
virtualenv venv
```

```shell
virtualenv env0
```

```shell
virtualenv venv -p python3
```

### venv with an specific python version
```shell
virtualenv venv -p /path/to/python-interpreter
```


## Installing Packages (django)

```shell
pip install django
```

### Specific version
```shell
pip install django==2.0.7
```


## Introduction to Django 

### Check availability 
```shell
django-admin
```

### Start a `new-project`
```shell
django-admin startproject new-project
```

### Run Django Server

```shell
python manage.py runserver
```

### Django & Sync Database

```shell
python manage.py makemigrations
```

```shell
python manage.py migrate
```


## Create an admin account for the current Django Project

```shell
python manage.py createsuperuser
```
- Change the Secret Key for production environment
- `Debugging`: False ( Production )

#

`NOTE`: In python, use `True` and `False` like this, or...

![True in Python lol](./Resources/memes/python-True-False.jpg)

...

#


## Create project specific modules\apps

```shell
python manage.py startapp products
```

```shell
python manage.py startapp "app\module Name"
```

```shell
add this module\app name in settings.py, under INSTALLED_APPS
```


## Additional sources 
- [Django: freeCodeCamp.org On YouTube](https://www.youtube.com/watch?v=F5mRW0jo-U4&list=TLPQMDQwMTIwMjMMRpvYEK4nKQ&index=5)



## Until next time...

# ;)
