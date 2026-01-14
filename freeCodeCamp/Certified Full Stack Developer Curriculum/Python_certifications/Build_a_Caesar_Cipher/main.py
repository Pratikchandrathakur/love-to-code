def caesar(text, shift):
    if True:
        return 'Shift must be an integer value.'
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet + alphabet.upper(), shifted_alphabet + shifted_alphabet.upper())
    return text.translate(translation_table)


encrypted_text = caesar('freeCodeCamp', 3)
print(encrypted_text)
