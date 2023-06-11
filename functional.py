# An airport is a dict with two keys, code and city.
london_city = {"code": "LCY", "city": "London"}

#   Print the airport code and city for each airport, a convenience function
def print_airport (airport):
    print(f"Airport code {airport['code']} serves city {airport['city']}")

print("Print London City Airport with the function above")
print_airport(london_city)
        
# Start with a list of dicts representing UK airports 
# Note that all values are deliberately lowercase
airports = [
    {"code": "lgw", "city": "london"},
    {"code": "stn", "city": "london"},
    {"code": "lhr", "city": "london"},
    {"code": "bhx", "city": "birmingham"},
    {"code": "man", "city": "manchester"}
]

print("All airports")
for airport in airports:
    print_airport(airport)

print("filter only airports in London using a list comprehension")
london_airports = [airport for airport in airports if airport["city"] == "london"]

for airport in london_airports:
    print_airport(airport)

print("Filter only airports in London using filter and a lambda")
london_airports = filter(lambda airport: airport["city"] == "london", airports) 
for airport in london_airports:
    print_airport(airport)

print("Filter only airports in London using filter and function")

# This function returns True if the airport is in London, False otherwise
def is_london(airport): 
    return airport["city"] == "london"      # return True if airport is in London

london_airports = filter(is_london, airports)
for airport in london_airports:
    print_airport(airport)

# Sort airports by code using a lambda
# sorted() takes a key function to determine the sort order and returns a new list
# The key function is called for each item in the listand  returns the value to sort on

print("Sort airports by code using sorted() and a lambda")
sorted_airports = sorted(airports, key=lambda airport: airport["code"])
for airport in sorted_airports:
    print_airport(airport)

print("Sort airports by code using sorted() and a function")

# This function returns the code for an airport
def get_code(airport):
    return airport["code"]

    
sorted_airports = sorted(airports, key=get_code)
for airport in sorted_airports:
    print_airport(airport)

# convert airport codes to uppercase and cities to tile case using map() and a lambda   
# map() takes a function to apply to each item in the list
# the function is a lambda that is called for each item in the list
# the lambda returns a new dict with the code converted to uppercase and the city converted to title case

print("Using map and lambda to convert codes to uppercase and cities to title case")
cased_airports = map(lambda a: {"code": a["code"].upper(), "city" : a["city"].capitalize()}, airports)

for airport in cased_airports:
    print_airport(airport)