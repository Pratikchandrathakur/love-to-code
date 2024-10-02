sentence="this is a best python course"
sentence_split=sentence.split() #It split the sting into list using delimiter- by default it is space here.
print(sentence_split)
sentence_join=" ".join(sentence_split) #It join the list into string using delimiter -> " ".
sentence_join="-".join(sentence_split) #It join the list into string and add it by "-" using delimiter -> "-".
print(sentence_join)

ip="192.168.34.1"
ip_split=ip.split(".")
print(ip_split)
ip_join=".".join(ip_split)
print(ip_join)
