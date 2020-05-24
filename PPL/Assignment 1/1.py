#question1
#river crossing

leftshore = ["cabbage", "goat", "wolf"]
rightshore = []
final = []

def moveobject(object, lastdirection):
    if lastdirection == "left":
        leftshore.remove(object)
        rightshore.append(object)
        return "right"
    else:
        rightshore.remove(object)
        leftshore.append(object)
        return "left"

def isSafeToMove(object, shore):
    forbidden_pair1 = ["goat", "wolf"]
    forbidden_pair2 = ["cabbage", "goat"]
    leftover = shore.copy()
    if(object):
        leftover.remove(object)
    leftover.sort()
    if leftover != forbidden_pair1 and leftover != forbidden_pair2:
        return True
    else:
        return False

def changedirection(lastdirection):
    if lastdirection == "left":
        return "right"
    else:
        return "left"

def solution():
    movableObjects = []
    lastmovedObject = ""
    lastdirection = "left"
    state =""
    while len(rightshore) != 3:
        if lastdirection == "left":
            movableObjects = leftshore
        else:
            movableObjects = rightshore
        state = "farmer"
        # conditon for miving the objects from the right shore:

        if len(movableObjects) == 1 and lastdirection == "right" or  len(movableObjects) !=3 and lastdirection == "right" and isSafeToMove("", movableObjects) :
            lastdirection = changedirection(lastdirection)
            lastmovedObject = ""

        # condition for moving the objects from the left shore :

        else:
            for object in movableObjects:
                if lastmovedObject != object and isSafeToMove(object, movableObjects):
                    lastdirection = moveobject(object, lastdirection)
                    lastmovedObject = object
                    break
            state += " and "+ lastmovedObject

        state += " rowed to " + lastdirection + " shore "

        final.append(state)

if __name__ == "__main__":
    solution()
    if len(rightshore) == 3 :
        print("Successfully crossed the river")
    count = 1
    for step in final:
        print(" step {0} : ".format(count) + step)
        count += 1



