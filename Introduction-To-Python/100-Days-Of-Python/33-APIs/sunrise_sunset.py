import requests as rq
from datetime import datetime
import time
import smtplib

MY_LAT = 51.5073219
MY_LNG = -0.1276474
print(f"\nYour Current Location(lat, long):   {MY_LAT}  {MY_LNG}")

response = rq.get("http://api.open-notify.org/iss-now.json")    # ISS
response.raise_for_status()

data = response.json()
# print(data)

iss_latitude = data["iss_position"]["latitude"]
iss_longitude = data["iss_position"]["longitude"]
print(f"\nISS Current Location(lat, long):   {iss_latitude}  {iss_longitude}")


def iss_overhead():
    if float(iss_latitude) <= MY_LAT + 5 and float(iss_latitude) >= MY_LAT - 5:
        if float(iss_longitude) <= MY_LNG + 5 and float(iss_longitude) >= MY_LNG - 5:
            print("\n\tAlert!!!  ISS is now above you...")
            return True


parameters = {
    "lat": MY_LAT,
    "lng": MY_LNG,
    "formatted": 0
}

response = rq.get("https://api.sunrise-sunset.org/json",
                  params=parameters)    # Sunrise, Sunset
response.raise_for_status()

data = response.json()
# print(data)

sunrise = data["results"]["sunrise"].split('T')[1].split(":")[0]
sunset = data["results"]["sunset"].split('T')[1].split(":")[0]

print(f"\nSunrise & Sunset(hours):   {sunrise}  {sunset}")


current_time = datetime.now().hour
# print(current_time)


def night_mode():
    if current_time >= sunset and current_time <= sunrise:
        print("\n\tNight Mode On...\n")
        return True


def send_email():
    print("Please wait, It might take a while :)\n")
    with smtplib.SMTP(host='smtp.gmail.com', port=587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.login("AUTHOR'S E-MAIL", "AUTHOR'S EMAIL PASSKEY")     # contact.samskywalker@gmail.com, abcdefghijklmnopq
        smtp.send_message("\n\tLook Up... The ISS is now above you :)")


while True:
    time.sleep(60)
    if iss_overhead and night_mode:
        print("\n\tLook Up... The ISS is now above you :)")
        # send_email()
