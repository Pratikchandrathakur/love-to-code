def caesar(text, shift):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet, shifted_alphabet)
    return text.translate(translation_table)

# Step 12: Test the function
encrypted_text = caesar("freeCodeCamp", 3)
print(encrypted_text)
