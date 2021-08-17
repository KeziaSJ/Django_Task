from django.shortcuts import render
from .models import player

def list_view(request):
	
	context ={}
	context["dataset"] = player.objects.all()

	return render(request, "list_view.html", context)

