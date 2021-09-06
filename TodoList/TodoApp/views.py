from django.shortcuts import render,redirect
from .models import List
from .forms import ListForm
from django.contrib import messages



def home(request):
    if request.method=="POST":
        form=ListForm(request.POST or None)
        if form.is_valid():
            form.save()
    all_items = List.objects.all().order_by('date')
    return render(request, 'home.html', {'all_items': all_items})

def delete(request,list_id):
    item=List.objects.get(pk=list_id)
    item.delete()
    return redirect('home')

def edit(request,list_id):
    item = List.objects.get(pk=list_id)
    if request.method=="POST":
        form=ListForm(request.POST or None,instance=item)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        return render(request,'edit.html',{'item':item})


def cross_off(request,list_id):
    item = List.objects.get(pk=list_id)
    item.completed=True
    item.save()
    return redirect('home')

def uncross(request,list_id):
    item = List.objects.get(pk=list_id)
    item.completed = False
    item.save()
    return redirect('home')
