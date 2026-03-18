from django import forms
from django.db import models
from django import forms
from django.db import models
from django.forms import fields
from .models import Closet, Clothes

class ClosetForm(forms.ModelForm):
    class Meta:
        model = Closet
        fields = ['name']

class ClothesForm(forms.ModelForm):
    class Meta:
        model = Clothes
        fields = ['clothing_name', 'closet', 'description', 'created_at']