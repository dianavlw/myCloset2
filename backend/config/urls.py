
from django.urls import path, include
from django.contrib import admin



urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/",  include("closet_app.urls"))
    # path('token-auth/', obtain_jwt_tokens),
    # path('closet/', include("closet_app.urls"))
]

