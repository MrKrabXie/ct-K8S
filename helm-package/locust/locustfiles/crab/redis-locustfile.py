from locust import FastHttpUser, task, between

class RedisUser(FastHttpUser):
    wait_time = between(1, 3)

    @task
    def benchmark_redis(self):
        response = self.client.get("/redis", headers={"Content-Type": "application/json"})
        print(response.text)

