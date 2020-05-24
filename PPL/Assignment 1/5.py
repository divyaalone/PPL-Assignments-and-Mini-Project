#question 5
# missing page numbers

def isinlist(x,lst):
	lst = set(lst)
	if x in lst :
		return 1
	else:
		return 0

n=int(input("Enter the number of pages= "))
print("Enter page number list= ")
lst= list(map(int, input().split()))

for count in range(1,n+1):
	if isinlist(count,lst)!=1:
		print(count)
