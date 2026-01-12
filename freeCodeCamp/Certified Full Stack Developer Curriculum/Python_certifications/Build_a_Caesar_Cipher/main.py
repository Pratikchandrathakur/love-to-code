alphabet = 'abcdefghijklmnopqrstuvwxyz'
shift = 5

# Build the shifted alphabet
shifted_alphabet = alphabet[shift:] + alphabet[:shift]

# Create the translation table
translation_table = str.maketrans(alphabet, shifted_alphabet)

