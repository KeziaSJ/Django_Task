from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from .models import Players
from django.db.models.aggregates import Count, Sum
from django.core.paginator import Paginator

# Create your views here.

def home(request):
    all_players = Players.objects.all().order_by('rank')

    paginator = Paginator(all_players, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)


    context = {
        'page_obj': page_obj
    }

    return render(request, 'home.html', context)  

# ----Add player-----
def add_player(request):
    if request.method == 'POST':

        name = request.POST['name']
        code = request.POST['code']
        cost = request.POST['cost']
        rank = request.POST['rank']
       
  
        Players.objects.create(name=name, code=code, cost=cost,
                                rank=rank)
        return JsonResponse('success', safe=False)


# ----Edit player-----
def edit_player(request, pk):
    if request.method == 'POST':

        player = Players.objects.get(id=pk)
        player.name = request.POST['name']
        player.code = request.POST['code']
        player.cost = request.POST['cost']
        player.rank = request.POST['rank']
        player.save()

        return redirect('home')


# ----Delete player-----
def delete_player(request, pk):
    if request.method == 'GET':

        player = Players.objects.get(id=pk)
        player.delete()

        return JsonResponse('success', safe=False)


# ----Top players-----
def top_players(request):

    top_all_player = Players.objects.values('name', 'code', 'cost','rank').order_by('rank')

    paginator = Paginator(top_all_player, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context = {
        'page_obj': page_obj
    }
    return render(request, 'top-players.html', context)
