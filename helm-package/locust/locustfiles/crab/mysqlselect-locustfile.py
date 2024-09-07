from locust import FastHttpUser, task, between
import random
import string
import time

class InsertUserUser(FastHttpUser):
    wait_time = between(1, 2)  # 用户在每次任务之间的等待时间范围（秒）

    @task
    def benchmark_select(self):
        # 生成一个随机的 numQueries 值，范围从 1 到 100,000
        num_queries = random.randint(1, 100000)

        start_time = time.time()
        with self.client.get(f"/selectOne?numQueries={num_queries}", catch_response=True) as response:
            end_time = time.time()
            response_time = end_time - start_time
            # 输出响应的状态码和响应时间
            print(f"Status code: {response.status_code}, Response time: {response_time} seconds")

            # 使用 Locust 的 response_time 属性记录响应时间
            self.environment.events.request_success.fire(
                request_type="GET",
                name="/selectOne",
                response_time=int(response_time * 1000),  # 转换为毫秒
                response_length=len(response.content)
            )