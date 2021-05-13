class Vaccine:
    """A class for describing the different types of vaccinations for COVID"""
    vaccine_name = "Not Known"
    vaccine_type = "Not Known"
    doses = 2
    effiacy = 0.5
    storage_conditions = "Not Known"
    is_approved = False
    approval_date = ""

    def __init__(self, vname, vtype):
        self.vaccine_name = vname
        self.vaccine_type = vtype

    def get_effiacy(self):
        return self.effiacy

    def approve_for_use(self, vdate):
        self.approval_date = vdate 
        self.is_approved = True

    def describe(self):
        description_template = "The {0} vaccine is the {1} type"
        return description_template.format(self.vaccine_name, self.vaccine_type)
