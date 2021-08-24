#backend/post/views.py
from django.shortcuts import render

from .models import User

def sign_up_view(request):
    if request.method == 'GET':
        return render(request, 'index.html')
    elif request.method == 'POST':
        userid = request.POST.get('username', None)
        password = request.POST.get('password', None)
        nickname = request.POST.get('password2', None)
        phonenum = request.POST.get('bio', None)

        new_user = User()
        new_user.username = userid
        new_user.password = password
        new_user.nickname = nickname
        new_user.phonenum = phonenum
        new_user.save()

        return render(request, '/djangoreact') #회원가입 완료 시 로그인 페이지 실행
