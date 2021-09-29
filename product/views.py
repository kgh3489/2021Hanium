# from django.shortcuts import render
# from django.http import HttpResponse

# # Create your views here.
# def prouduct_register_view(request):
#     if request.method == 'GET':
#         return HttpResponse('!')
    
#     #elif request.method =='POST':
#     if request.method == 'POSt':
#         return HttpResponse('!!!')
from django.core import serializers
from rest_framework import status
from rest_framework.views import APIView 
from rest_framework.response import Response 
from django.http.response import HttpResponse 
from .models import ProductModel 
from .serializers import ProductSerializer 


class product_register_view(APIView):
    def get(self, request, format=None):
        products = ProductModel.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_BAD_REQUEST)
