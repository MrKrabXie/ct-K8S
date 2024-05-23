
# 查看状态
kubectl get pods

# 控制器层
kubectl get deployments

# 查看服务名， 可以通过服务名访问
kubectl get services

# 来获取  Pod 的 IP 地址
kubectl get pods -o wide 