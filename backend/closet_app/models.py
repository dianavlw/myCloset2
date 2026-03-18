from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.
class Closet(models.Model):
    name = models.CharField(max_length= 64)
    user = models.ForeignKey(User, related_name="closet", on_delete=models.CASCADE )

    def __str__(self):
        return f"{self.name}"

class Clothes(models.Model):
    clothing_name = models.CharField(max_length=255)
    closet = models.ForeignKey(Closet, on_delete=models.CASCADE, related_name='clothes')
    description = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Name: {self.clothing_name}, Description: {self.description}"