# Create an Airport class with attributes code and city
class Airport:
    def __init__(self, code, city):
        self._code = code
        self.city = city

    # Create a __str__ method that returns the code and city in a nicely formatted string
    def __str__(self):
        return f"Airport code {self.code} serves city {self.city}."

    @property
    def code(self):
        return self._code

    @code.setter
    def code(self, code):
        if len(code) != 3:
            raise ValueError("Airport code must be 3 characters")
        self._code = code

    @property
    def city(self):
        return self._city

    @city.setter
    def city(self, city):
        if city not in ("London", "Birmingham", "Manchester"):
            raise ValueError("Airport city must be either London, Birmingham or Manchester")
        self._city = city

def main():
# Create a list of airports
    airports = []
    airports.append(Airport("LGW", "London"))
    airports.append(Airport("MAN", "Manchester"))
    airports.append(Airport("LHR", "London"))

    for airport in airports:
        print(airport) # will use the __str__ method

    stansted = Airport("STN", "London")
    print(stansted)
    stansted.city = "Birmingham"
    print(stansted)
    # Change the city for Stansted, we don't want to allow this
    
if __name__ == "__main__":
    main()
