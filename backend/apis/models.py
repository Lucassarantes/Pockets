from django.db import models

# Create your models here.
class Expense(models.Model):
    name = models.CharField(max_length=150)
    value = models.DecimalField(max_digits=15, decimal_places=2)
    expense_date = models.DateField()
    registered_at = models.DateField(auto_now_add=True)
    description = models.TextField()
