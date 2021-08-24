from django.urls import path

from . import views

urlpatterns = [
    path('djangoreact/', views.sign_up_view, name='sign-up'),
]