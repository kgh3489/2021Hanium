from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def prouduct_register_view(request):
    if request.method == 'GET':
        return HttpResponse('!')
    
    #elif request.method =='POST':
    if request.method == 'POSt':
        return HttpResponse('!!!')  