alphabet = 'abcdefghijklmnopqrstuvwxyz'
shift = 5

# Build the shifted alphabet
shifted_alphabet = alphabet[shift:] + alphabet[:shift]

# Create the translation table
translation_table = str.maketrans(alphabet, shifted_alphabet)
#Input is stored on the text variable
text = 'hello world'
#encrpted text will be stored on the encrypted variable using the translate function it chnage the value to mapped table value.
encrypted_text=text.translate(translation_table)
