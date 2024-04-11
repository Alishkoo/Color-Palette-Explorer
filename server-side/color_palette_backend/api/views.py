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


class ColorAPIList(generics.ListCreateAPIView):
    queryset = Colors.objects.all()
    serializer_class = ColorSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    
class ColorAPIUpdate(generics.RetrieveAPIView):
    queryset = Colors.objects.all()
    serializer_class = ColorSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

class ColorsApiView(APIView):
    # queryset = Colors.objects.all()
    # serializer_class = ColorSerializer
    def get(self, request):
        lst = Colors.objects.all().values()
        return Response({'colors': lst})
    
    
    permission_classes = (IsAuthenticated,)

        
    def post(self, request):
       new_person = Colors.objects.create(
           hex_code_1=request.data['hex_code_1'],
           hex_code_2=request.data['hex_code_2'],
           hex_code_3=request.data['hex_code_3'],
           hex_code_4=request.data['hex_code_4'],
           hex_code_5=request.data['hex_code_5']
       ) 
       
       return Response({'message': 'hello world'})
    


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

   
    