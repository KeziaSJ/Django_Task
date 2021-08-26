from django.db import models

# Create your models here.

class Players(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    cost = models.BigIntegerField(null=True, blank=True)
    code = models.CharField(max_length=200, null=True, blank=True)
    rank = models.IntegerField(null=True, blank=True)
    

