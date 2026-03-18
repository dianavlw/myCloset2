from django.shortcuts import render
from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from closet_app.models import User, Closet, Clothes
from closet_app.serializers import UserSerializer, ClosetSerializer, ClothesSerializer

class AllowAnyCreate(permissions.IsAuthenticated):
        def has_permission(self, request, view):
            if view.action == "create":
                return request.method == "POST"
            return super().has_permission(request, view)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    permission_classes = [AllowAnyCreate]
    

class ClosetViewSet(viewsets.ModelViewSet):
    # queryset = Closet.objects.all()
    serializer_class = ClosetSerializer
    def get_queryset(self):
        user = self.request.user
        print (user)
        return user.closet.all()
    def perform_create(self, serializer):
        # print("this happened")
        # return super().perform_create(serializer)
        serializer.save(user = self.request.user)


class ClothesViewSet(viewsets.ModelViewSet):
    queryset = Clothes.objects.all()
    serializer_class = ClothesSerializer

