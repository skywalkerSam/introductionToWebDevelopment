from django.db import models

# Create your models here.
class Product(models.Model):
    tittle = models.TextField()
    description = models.TextField(default="Write some description here...")
    price = models.TextField()
    