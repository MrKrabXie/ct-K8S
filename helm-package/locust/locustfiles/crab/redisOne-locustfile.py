from locust import FastHttpUser, task, between
import random
import string

class RedisUser(FastHttpUser):
    wait_time = between(1, 2)  # 用户在每次任务之间的等待时间范围（秒）

    @task
    def redis_one(self):
        # 生成一个随机的 key
        key = ''.join(random.choices(string.ascii_letters + string.digits, k=10))

        with self.client.get(f"/redisOne?key={key}", catch_response=True) as response:
            # 使用 Locust 的 request_time 属性来获取响应时间
            response_time = response.request_time / 1000  # 转换为秒
            print(f"Status code: {response.status_code}, Response time: {response_time} seconds")




