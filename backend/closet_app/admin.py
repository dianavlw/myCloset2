from django.contrib import admin
from .models import Closet, Clothes


admin.site.register([Closet, Clothes])