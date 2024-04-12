
from django.contrib import admin
from django.urls import path
from api.views import * 
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView)
from api.views import UserRegistration


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/colorslist/', ColorsApiView.as_view()) ,
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('api/register/', UserRegistration.as_view(), name='user_registration'),
    path('api/colors/', ColorAPIList.as_view()),
]
