from rest_framework import serializers
from .models import CueCard, Category


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class CueCardSerializer(serializers.ModelSerializer):

    def to_representation(self, instance):
        self.fields['user'] = CategorySerializer(read_only=True)
        return super(CueCardSerializer, self).to_representation(instance)

    class Meta:
        model = CueCard
        fields = '__all__'

