1. mysql  ✅
2. redis  ✅
3. 完成两者合并   ✅  直接 kubectl apply -f mysql-service.yaml -f mysql-deployment.yaml -f redis-service.yaml -f redis-deployment.yaml
4. 先启动注册中心
5. 再启动 ct
6. 单独启动 ct服务  --  mysql启动关于它是否准备好， 有 initcontrain, 和 readiness probe
7. ct + mysql一起启动  --
8. 然后云服务化