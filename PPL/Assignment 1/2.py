#question 2
#random output of a dice

import random

choice = 'y'
while choice != 'n':
	print ("Output of a dice: ")
	print (random.choice([1,2,3,4,5,6]))
	choice = input("Would you like to continue? (y/n) :")
