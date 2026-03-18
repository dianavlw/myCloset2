from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.routers import DefaultRouter
from closet_app.serializers import UserSerializer, ClothesSerializer, ClothesSerializer
from closet_app.views import UserViewSet, ClosetViewSet, ClothesViewSet


urlpatterns = [
    path("login/", obtain_jwt_token)
]

router = DefaultRouter()
router.register(r"users", UserViewSet, basename="user")
router.register(r"closets", ClosetViewSet, basename="closet")
router.register(r"clothes", ClothesViewSet, basename="clothes")

urlpatterns += router.urls

# urlpatterns = [
    # CLOSET URLS
    # path('closets/', views.index, name='closets_list'),
    # path('closets/new', views.new_closet, name='new_closet'),
    # path('closets/<int:closet_id>', views.closet_detail, name='closet_detail'),
    # path('closets/<int:closet_id>/edit', views.edit_closet, name='edit_closet'),
    # path('closets/<int:closet_id>/delete', views.delete_closet, name='delete_closet'),

    # CLOTHES URLS
    # path('<int:closet_id>/clothes/<int:clothes_id>', views.clothes_detail, name='clothes_detail'),
    # path('<int:closet_id>/clothes/new', views.new_clothes, name='new_clothes'),
    # path('<int:closet_id>/clothes/<int:clothes_id>/edit', views.edit_clothes, name='edit_clothes'),
    # path('<int:closet_id>/clothes/<int:clothes_id>/delete', views.delete_clothes, name='delete_clothes')
    

# ]