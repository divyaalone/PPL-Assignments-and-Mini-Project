#question 6
#pair of amicable numbers

import math 

def SumDivisors(number):
	sum=0
	i=2
	while i <=(math.sqrt(number)):
		if number % i == 0 :
			if(i==(number/i)):
				sum += i
			else:
				sum=sum+(i+number/i)
		i=i+1
	return (sum+1)

def printAmicable(number):
		count=0
		num=2.0
		last=0
		while count!=number:
			num2=SumDivisors(num)
			sum=SumDivisors(num2)
			if(sum==num and num2!=num and num!=last):
				print(num,",",num2)
				count+=1
				last=num2
			num+=1

printAmicable(10)  	                    
