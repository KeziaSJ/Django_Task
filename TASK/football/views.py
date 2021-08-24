from django.shortcuts import render
from .models import player
from .forms import playerform
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.http import HttpResponse
from django.views import View
import pdb;

def list_view(request):
    form = playerform()
    players = player.objects.all()

    if request.POST.get('action') == 'post':
        rank= request.POST.get('rank')
        name = request.POST.get('name')
        code = request.POST.get('code')
        cost = request.POST.get('cost')

        player.objects.create(
            rank= rank,
        name = name,
        code = code,
        cost = cost
            )

        return JsonResponse('success', safe=False)

    return render(request, "list_view.html", {"form": form, "players": players})

# def player_create(request):
#     if request.is_ajax and request.method == "POST":
#         form = playerform(request.POST)
#         if form.is_valid():
#             instance = form.save()
#             ser_instance = serializers.serialize('json', [ instance, ])
#             return JsonResponse({"instance": ser_instance}, status=200)
#         else:
#             return JsonResponse({"error": form.errors}, status=400)
#     return JsonResponse({"error": ""}, status=400)

def view(request):
    players = player.objects.all().order_by('rank')
    if request.method == "POST":  
        form = playerform(request.POST)  
        if form.is_valid():  
            try:  
                form.save() 
                return redirect('view/')  
            except:  
                pass  
    else:  
        form = playerform()  
    return render(request,'view.html',{'form1':form,'players':players})  

   