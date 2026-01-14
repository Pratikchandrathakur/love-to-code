def caesar(text, shift):
    if isinstance(shift, int):
        alphabet = 'abcdefghijklmnopqrstuvwxyz'
        shift = shift % len(alphabet)  # normalize shift
        shifted_alphabet = alphabet[shift:] + alphabet[:shift]
        translation_table = str.maketrans(
            alphabet + alphabet.upper(),
            shifted_alphabet + shifted_alphabet.upper()
        )
        return text.translate(translation_table)
    else:
        return "Shift must be an integer value."


encrypted_text = caesar('freeCodeCamp', 3)
print(encrypted_text)
