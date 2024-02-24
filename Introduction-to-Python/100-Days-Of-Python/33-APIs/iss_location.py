import requests as rq

response = rq.get("http://api.open-notify.org/iss-now.json")    # ISS
response.raise_for_status()

data = response.json()
print(data)

latitude = data["iss_position"]["latitude"]
longitude = data["iss_position"]["longitude"]
print(f"\nISS Current Location:   {latitude}  {longitude}")




