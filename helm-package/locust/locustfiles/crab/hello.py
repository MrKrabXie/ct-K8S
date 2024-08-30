'''
Author: 谢嘉伟 wei17306927526@gmail.com
Date: 2024-08-29 22:55:46
LastEditors: 谢嘉伟 wei17306927526@gmail.com
LastEditTime: 2024-08-29 23:43:02
FilePath: /undefined/Users/xiejiawei/helm_package/locust/locustfiles/crab/hello.py
Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
'''
# _*_ coding : utf-8 _*_
from locust import FastHttpUser, task, between, LoadTestShape

default_headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'}

# 定义用户行为类，继承 FastHttpUser
class HelloWorldUser(FastHttpUser):
    # 设置每个请求之间的等待时间（秒）
    wait_time = between(1, 3)
    
    # 定义一个任务，任务内调用接口
    @task
    def hello_world(self):
        # 发送 GET 请求到指定的接口
        response = self.client.get("/api/hello",  headers=default_headers)
        # 打印响应内容（可选）
        print(response.text)

    def on_start(self):
        # 每个用户在开始压测时可以执行的动作（可选）
        pass

    def on_stop(self):
        # 每个用户在压测结束时可以执行的动作（可选）
        pass

# 定义负载测试形状
class StepLoadShape(LoadTestShape):
    """
    逐步增加负载的形状
    """
    step_time = 10  # 每步持续时间为60秒
    step_load = 100  # 每步增加的用户数
    spawn_rate = 10  # 用户每秒增加的速率
    time_limit = 60  # 总运行时间600秒

    def tick(self):
        # 获取当前运行的时间
        run_time = self.get_run_time()

        # 检查是否超时
        if run_time > self.time_limit:
            return None

        # 计算当前步骤
        current_step = (run_time // self.step_time) + 1
        # 返回当前步骤的用户数和生成速率
        return (current_step * self.step_load, self.spawn_rate)

if __name__ == '__main__':
    import os
    import webbrowser
    # 打开浏览器到 Locust 的 Web 界面
    webbrowser.open_new_tab('http://localhost:8089')
    # 执行 Locust，指定要测试的文件和主机地址
    os.system("locust -f Locustfile.py --host=http://localhost:8081")