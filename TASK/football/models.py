from django.db import models

class player(models.Model):
	name = models.CharField(max_length=50)
	cost = models.BigIntegerField()
	code = models.CharField(max_length=50)
	rank = models.IntegerField()


