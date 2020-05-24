#harmonic

import math
def generatedivisor(n) :
	arr = []
	for i in range(1,n+1):
		if n%i == 0:	
			arr.append(i)
	return arr
	
def harmonicmean(n) :
	sum = 0
	for i in range(0,len(n)) :
		sum += 1/n[i]
	return len(n)/sum

		
result = []
i,count = 0,10
while count:
	i = i+1
	if i == 1:
		result.append(i)
	else:
		divi = generatedivisor(i)
		num = harmonicmean(divi)
		if round(num,5) == math.floor(num):
			count = count - 1
			result.append(i)
print(result)
