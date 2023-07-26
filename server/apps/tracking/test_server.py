import requests

print(
    print(
        requests.post(
            "http://127.0.0.1:3030/data",
            json={"test": "yep"}
        ).json()
    )
)