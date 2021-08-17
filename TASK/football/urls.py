from django.urls import path,include
from . import views

urlpatterns = [
    
   path('',views.list_view,name='list_view'),
]

