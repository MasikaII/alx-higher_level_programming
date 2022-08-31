#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
# Using list comprehension
listNew = [[y**2 for y in x]for x in matrix]
# Returning the newly generated list
return listNew
