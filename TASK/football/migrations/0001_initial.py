# Generated by Django 3.2.5 on 2021-08-17 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='player',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('cost', models.IntegerField()),
                ('code', models.UUIDField()),
                ('rank', models.IntegerField()),
            ],
        ),
    ]
