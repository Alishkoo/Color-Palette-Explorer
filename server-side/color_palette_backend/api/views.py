from django.shortcuts import render
from .models import Colors
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .serializers import ColorSerializer
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import Http404
from django.contrib.auth.models import User


class ColorAPIList(generics.ListCreateAPIView):
    queryset = Colors.objects.all()
    serializer_class = ColorSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    
class ColorAPIUpdate(generics.RetrieveAPIView):
    queryset = Colors.objects.all()
    serializer_class = ColorSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ColorsApiView(APIView):
    # permission_classes = (IsAuthenticatedOrReadOnly,)
    
    def get(self, request):
        lst = Colors.objects.filter(id=1).values()
        return Response(lst)

    
    def put(self, request):
        color = Colors.objects.get(id=1)
        color.hex_code_1 = request.data['hex_code_1']
        color.hex_code_2 = request.data['hex_code_2']
        color.hex_code_3 = request.data['hex_code_3']
        color.hex_code_4 = request.data['hex_code_4']
        color.hex_code_5 = request.data['hex_code_5']
        color.save()
        return Response({'message': 'GOOD JOB!'})
        
    
    def post(self, request):
       new_person = Colors.objects.create(
           id=1,
           user=request.user,
           hex_code_1=request.data['hex_code_1'],
           hex_code_2=request.data['hex_code_2'],
           hex_code_3=request.data['hex_code_3'],
           hex_code_4=request.data['hex_code_4'],
           hex_code_5=request.data['hex_code_5']
       ) 
       
       return Response({'message': 'GOOD JOB!'})
    


class UserRegistration(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()

            
            refresh = RefreshToken.for_user(user)
            token = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }

            return Response({'user': serializer.data, 'token': token}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

   
    