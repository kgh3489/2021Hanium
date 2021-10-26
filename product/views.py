# from django.shortcuts import render

from django.core import serializers
from rest_framework import status, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import permission_classes, api_view
from rest_framework.filters import SearchFilter
from django.http.response import HttpResponse 
from .models import ProductModel 
from .serializers import ProductSerializer, SerachSerializer


class Product_Register_View(APIView):
    #permission_classes = [AllowAny]
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


class Product_Detail_View(APIView):
    def get_object(self, pk):
        job = get_object_or_404(ProductModel, pk=pk)
        return job

    def get(self, request, pk):
        job = self.get_object(pk)
        serializer = ProductSerializer(job)
        return Response(serializer.data)

    def put(self, request, pk):
        job = self.get_object(pk)
        serializer = ProductSerializer(job, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        job = self.get_object(pk)
        job.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
