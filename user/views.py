from django.shortcuts import render, redirect
from .models import UserModel
from django.http import HttpResponse

# 해당 html을 띄워주는 함수
def sign_up_view(request):
    if request.method == 'GET':
        return HttpResponse('!!')
    elif request.method == 'POST':
        username = request.POST.get('username', None)
        password = request.POST.get('password', None)
        nickname = request.POST.get('nicknname', None)
        phonenum = request.POST.get('phone', None)
        #post 요청에 담겨진 데이터를 받아옴

        new_user = UserModel()
        new_user.username = username
        new_user.password = password
        new_user.nickname = nickname
        new_user.phonenum = phonenum
        new_user.save()
        return HttpResponse('회원가입 완료!') #회원가입 완료 시 로그인 페이지 실행
