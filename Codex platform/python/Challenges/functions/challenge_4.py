# 🌖 Moon Phases-->Medium
# Why are there so many Moon emojis? Each one represents a different Moon phase, the shape of the Moon's sunlit portion as viewed from the Earth.

# Write a moon_phase() function that takes in a phase parameter of the Moon phase name given below and returns the correct Moon emoji for it:

# New Moon → 🌑
# Waxing Crescent → 🌒
# First Quarter → 🌓
# Waxing Gibbous → 🌔
# Full Moon → 🌕
# Waning Gibbous → 🌖
# Last Quarter → 🌗
# Waning Crescent → 🌘
# If an invalid phase name is passed to moon_phase(), return 'Invalid moon phase'.

# Call the moon_phase() and try it out:

# answer = moon_phase('New Moon')
# print(answer)      

# # Output: 🌑

# Write code below 💖

def moon_phase(phase):
  if phase=='New Moon':
    return "🌑"
  elif phase=='Waxing Crescent':
    return "🌒"
  elif phase=='First Quarter':
    return "🌓"
  elif phase=='Waxing Gibbous':
    return "🌔"
  elif phase=='Full Moon':
    return "🌕 "
  elif phase=='Waning Gibbous':
    return "🌖 "
  elif phase=='Last Quarter':
    return "🌗"
  elif phase=='Waning Crescent':
    return "🌘"
  else:
    return "Invalid moon phase"

answer=moon_phase('New Moon')
print(answer)
