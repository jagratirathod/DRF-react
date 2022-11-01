from django.shortcuts import render
from . serializers import StudentSerializer
# from rest_framework.generics import ListAPIVIEW
from . models import Student
from rest_framework import generics



# Create your views here.

class StudentList(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class =  StudentSerializer









