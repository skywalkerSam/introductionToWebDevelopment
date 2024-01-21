# Setting up a Virtual Environment

    python -m venv venv

    python -m venv "Virtual Environment Name"

## Activate Environment

    .\Scripts\activate    - Windows

    source bin/activate   - Linux\Mac

    deactivate      - Deactivate Environment

## Check Installed Packages

    pip freeze

    pip list

## Another way to Set-Up a VirtualEnvironment - virtualenv

    virtualenv        - Check availability

    virtualenv venv

    virtualenv "Virtual Environment Name"

    virtualenv -p python3

    virtualenv venv -p python3

    virtualenv venv -p "Specfic Python Version File Path"

## Installing Packages (django)

    pip install django==2.0.7

    pip install django

## Create a Django Project

    django-admin      - Check availablability

    django-admin startproject trydjango

    django-admin startproject <Project_Name>

## Run Django Server

    python manage.py runserver

## Django & Database Sync

    python manage.py makemigrations

    python manage.py migrate

## Create an admin account for the current Django Project

    python manage.py createsuperuser

    Change the Secret Key for production environment.

    Turn debugging False for production environment.

## Create project specfic modules\apps

    python manage.py startapp products

    python manage.py startapp "app\module Name"

    add this module\app name in settings.py, under INSTALLED_APPS

Source: [Django Tutorial from freeCodeCamp.org On YouTube](https://www.youtube.com/watch?v=F5mRW0jo-U4&list=TLPQMDQwMTIwMjMMRpvYEK4nKQ&index=5)
