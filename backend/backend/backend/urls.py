from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from cue_cards import views


router = routers.DefaultRouter()
router.register(r'cue-cards', views.CueCardView, 'cue cards')
router.register(r'categories', views.CategoryView, 'categories')



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

