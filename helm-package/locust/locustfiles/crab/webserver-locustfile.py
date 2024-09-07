from locust import FastHttpUser, task, between
import random
import string
import time

class WebServerUser(FastHttpUser):
    # 定义用户在任务之间的等待时间（秒）
    wait_time = between(1, 2)
    # 生成一个 3k 大小的随机字符串
    def generate_payload(self, size_in_kb=3):
        size_in_bytes = size_in_kb * 1024
        return ''.join(random.choices(string.ascii_letters + string.digits, k=size_in_bytes))
  # 任务：请求 /webServer 接口
    @task
    def benchmark_web_server(self):
        payload = self.generate_payload()  # 生成 3k 字节大小的随机字符串
        params = {'data': payload}  # 将其作为 URL 参数

        with self.client.get("/webServer", params=params, catch_response=True) as response:
            if response.status_code == 200:
                response.success()
            else:
                response.failure(f"Failed with status code: {response.status_code}")