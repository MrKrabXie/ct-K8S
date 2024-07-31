
# 查看状态
kubectl get pods

# 控制器层
kubectl get deployments

# 查看服务名， 可以通过服务名访问
kubectl get services

# 来获取  Pod 的 IP 地址
kubectl get pods -o wide



## 本地实验常用命令

### 使用端口转发 (Port Forwarding)
kubectl port-forward service/activemq 8161:8161

###  使用 NodePort 或 LoadBalancer 类型的 Service
kubectl get svc activemq
```
NAME      TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
activemq  NodePort   10.100.123.45   <none>        61616:32123/TCP,8161:32124/TCP   2m
```

### 使用集群内部 DNS
Kubernetes 会为每个 Service 创建一个 DNS 记录，格式为 <service-name>.<namespace>.svc.cluster.local。你可以通过 Service 的 DNS 名称来访问它。

例如，如果你的 Service 名称是 activemq，在默认命名空间下，你可以通过 activemq.default.svc.cluster.local 来访问 ActiveMQ。