from django.contrib import admin
from .models import Category, CueCard


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'description',)


class CueCardAdmin(admin.ModelAdmin):
    list_display = ('question', 'answer', 'view_count', 'category')


admin.site.register(Category, CategoryAdmin)
admin.site.register(CueCard, CueCardAdmin)

