#question 7
#armstrong numbers


def order(x):
    n = 0
    while (x/10!=0):
        n = n+1
        x = int(x/10)
    return n 

def isArmstrong (x): 
    n = order(x) 
    temp = x 
    sum1 = 0
    while (temp!=0): 
        r = temp%10
        sum1 += r**n
        temp = int(temp/10)
    return (sum1 == x) 
  
start=int(input("Enter start of the range= "))
end=int(input("Enter end of the range= "))
a=0
for a in range(start,end+1):
	if isArmstrong(a)==1:
		print("%d" %a)
		a+=1
		
