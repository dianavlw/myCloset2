from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from closet_app.models import User, Closet, Clothes


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'closet', 'password']
        depth = 1
    
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
            instance.save()
            return instance

class ClosetSerializer(serializers.ModelSerializer):
    # closet = serializers.StringRelatedField()
    class Meta:
        model = Closet
        # fields = ['clothes']
        fields = ['id', 'name', 'clothes']
        depth = 1

class ClothesSerializer(serializers.ModelSerializer):
    closet = serializers.StringRelatedField()
    closet_id = serializers.PrimaryKeyRelatedField(queryset=Closet.objects.all())
    class Meta:
        model = Clothes
        fields = ['clothing_name', 'closet', 'description', 'created_at']

