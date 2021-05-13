#  The genetics modules analysis DNA represented a strings

def count_bases (dna_string):
    return len(dna_string) // 3

def get_first_base(dna_string):
    "Returns the first three letters of the DNA string"
    return dna_string[:3]

def get_last_base(dna_string):
    "Returns the last three letters of the DNA string"
    return dna_string[-3:]    