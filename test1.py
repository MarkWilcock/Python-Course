# This example is to show the simple structure of a .py file rather than a .ipynb (Jupyter notebook) files
def main():
    print("hello world") # this is a comment
    print("The square of 3 is", square(3))

def square(x):
    return x**2

if __name__ == "__main__":
    main()

main()