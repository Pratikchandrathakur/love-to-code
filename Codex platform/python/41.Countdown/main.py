import bday_messages,datetime
today_date=datetime.date.today()
next_birthday=datetime.date(2025,2,6)

days_away=next_birthday-today_date

if today_date==next_birthday:
    print(random_message)
else:
    print(f"My next birthday is {days_away} days away!")

