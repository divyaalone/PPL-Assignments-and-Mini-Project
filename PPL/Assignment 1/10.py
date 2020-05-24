# question 10
# 10 numbers of geometric series

def nextnum (n,r):
	num=n*r
	return num
	
a=float(input(" Enter a: "))
r=float(input(" Enter r: "))
n=10
i=0
while i<n:
	print("%f" %a)
	a=nextnum(a,r)
	i=i+1

