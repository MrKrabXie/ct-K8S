# _*_ coding : utf-8 _*_
# @Time : 2023/11/6 10:13
# @Author : 釉榛
# @File : score_by_type_id
# @Project : PycharmProjects
import math
import os
import webbrowser
from datetime import datetime

import requests
from locust import FastHttpUser, task, between, LoadTestShape, constant

'''
快筛结论
'''
url_tn = 'http://192.168.0.2/screening/ncoguser/loginUserByAccount'
data_tn = {'account': '18859504399'}
headers_tn = {}
tn_res = requests.get(url=url_tn, headers=headers_tn, data=data_tn).json()
tn = tn_res["entity"]["tn"]
# 这个类类似设置性能测试，继承 FastHttpUser(比 httpuser 快)
class QuickstartUser(FastHttpUser):
    wait_time = constant(0)
    """压力脚本模板开始"""

    @task(1)
    def score_by_typeid(self):
        # 请求地址 指向一个上面定义的用户行为类
        refresh_url = "/m/type/scorebytypeid.json"
        headers = {
            'version': 'prod-1.0.16',
            'Authorization': 'Bearer '+tn,
        }
        data = {"id":"1705392203148"}

        # 开始模拟请求，“catch_response=True”为断言标记支持，如果不加，断言标记报错
        with self.client.post(refresh_url, json=data, headers=headers, verify=False,
                              catch_response=True, timeout=60) as refresh_res:
            # 请求结束进入断言，断言方式与 requests 请求断言完全相同，根据需要编写。
            print(refresh_res.text)
            if (refresh_res.text is not None) and ("查询成功" in refresh_res.text):
                # 断言成功，标记成功
                refresh_res.success()
            else:
                # 断言成功，标记失败
                if refresh_res.status_code == 502:
                    refresh_res.failure("断言失败:返回码==" + str(refresh_res.status_code) + "返回值:" + str(refresh_res.text))
                else:
                    refresh_res.failure("断言失败:==========返回码==========" + str(refresh_res.status_code)
                                        + "==========入参==========" + str(data)
                                        + "==========返回值==========" + str(refresh_res.text)
                                        + "==========responseHesders==========" + str(refresh_res.headers)
                                        + "==========断言失败时间==========" + str(datetime.now()))
                """压力脚本模板结束"""

    def on_start(self):
        # 点击开始压测时，所有用户都会去运行一次，如：用做模拟登录，采用self.client 模拟登录接口
        pass

    def on_stop(self):
        # 点击 stop 时，所有用户都会去运行一次。
        pass


