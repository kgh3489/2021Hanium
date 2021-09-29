# from django.shortcuts import render, redirect
# from .models import UserModel
# from rest_framework import status
# from rest_framework import viewsets
# from rest_framework.response import Response
# from django.http import HttpResponse, JsonResponse
# from django.core import serializers
# from .serializers import UserSerializer

from django.core import serializers
from rest_framework import status
from rest_framework.views import APIView 
from rest_framework.response import Response 
from django.http.response import HttpResponse 
from .models import UserModel 
from .serializers import UserSerializer 


class Userinfo(APIView):
    def get(self, request, format=None):
        users = UserModel.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_BAD_REQUEST)

# 해당 html을 띄워주는 함수
# def sign_up_view(request):
#     if request.method == 'GET':
#         #return HttpResponse("@@")
#         object = UserModel.objects.all()
#         post_list = serializers.serialize('json', object)
#         return HttpResponse(post_list, content_type="text/json-comment-filtered")
#     elif request.method == 'POST':
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data ,status=200)
#         return Response(serializer.errors ,status=status.HTTP_400_BAD_REQUEST)
            
            # username = request.POST.get('username', None)
            # password = request.POST.get('password', None)
            # nickname = request.POST.get('nickname', None)
            # phone = request.POST.get('phone', None)
            # #post 요청에 담겨진 데이터를 받아옴

            # new_user = UserModel()
            # new_user.username = username
            # new_user.password = password
            # new_user.nickname = nickname
            # new_user.phone = phone
            # new_user.save()
          #return HttpResponse('회원가입 완료!') #회원가입 완료 시 로그인 페이지 실행
