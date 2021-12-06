from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CategorySerializer, CueCardSerializer
from .models import Category, CueCard


class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CueCardView(viewsets.ModelViewSet):
    serializer_class = CueCardSerializer
    queryset = CueCard.objects.all()

