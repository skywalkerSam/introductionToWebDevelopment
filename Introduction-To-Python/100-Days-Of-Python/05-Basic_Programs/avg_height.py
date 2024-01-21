# 🚨 Don't change the code below 👇
student_heights = input("Input a list of student heights ").split()
for n in range(0, len(student_heights)):
    student_heights[n] = int(student_heights[n])
# 🚨 Don't change the code above 👆


#Write your code below this row 👇

# total_height = sum(student_heights)
total_height = 0
for height  in student_heights:
    total_height += height

# num_of_students = len(student_heights)
num_of_students = 0
for num in student_heights:
    num_of_students += 1

avg = total_height/num_of_students
rounded_avg = round(avg)
print(f"Average Height: {rounded_avg} ({avg})")
