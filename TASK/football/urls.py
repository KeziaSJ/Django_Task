from django.conf.urls import url
from django.urls import path,include
from . import views

urlpatterns = [
    
   path('',views.list_view,name='list_view'),
   path('view/',views.view,name='view'),
   # url(r'^$',views.list_view,name='list_view'),
   # path('create/',views.player_create,name='create'),
]

