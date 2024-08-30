
NAME: my-redis
LAST DEPLOYED: Wed Aug 28 10:13:59 2024
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
CHART NAME: redis
CHART VERSION: 20.0.3
APP VERSION: 7.4.0

** Please be patient while the chart is being deployed **

Redis&reg; can be accessed via port 6379 on the following DNS name from within your cluster:

    my-redis-master.default.svc.cluster.local



To get your password run:

    export REDIS_PASSWORD=$(kubectl get secret --namespace default my-redis -o jsonpath="{.data.redis-password}" | base64 -d)

To connect to your Redis&reg; server:

1. Run a Redis&reg; pod that you can use as a client:

   kubectl run --namespace default redis-client --restart='Never'  --env REDIS_PASSWORD=$REDIS_PASSWORD  --image docker.io/bitnami/redis:7.4.0-debian-12-r2 --command -- sleep infinity

   Use the following command to attach to the pod:

   kubectl exec --tty -i redis-client \
   --namespace default -- bash

2. Connect using the Redis&reg; CLI:
   REDISCLI_AUTH="$REDIS_PASSWORD" redis-cli -h my-redis-master

To connect to your database from outside the cluster execute the following commands:

    kubectl port-forward --namespace default svc/my-redis-master 6379:6379 &
    REDISCLI_AUTH="$REDIS_PASSWORD" redis-cli -h 127.0.0.1 -p 6379

WARNING: There are "resources" sections in the chart not set. Using "resourcesPreset" is not recommended for production. For production installations, please set the following values according to your workload needs:
- replica.resources
- master.resources
----
# mysql
NAME: my-mysql
LAST DEPLOYED: Wed Aug 28 10:19:04 2024
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
CHART NAME: mysql
CHART VERSION: 11.1.15
APP VERSION: 8.4.2

** Please be patient while the chart is being deployed **

Tip:

Watch the deployment status using the command: kubectl get pods -w --namespace default

Services:

echo Primary: my-mysql.default.svc.cluster.local:3306

Execute the following to get the administrator credentials:

echo Username: root
MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace default my-mysql -o jsonpath="{.data.mysql-root-password}" | base64 -d)

To connect to your database:

1. Run a pod that you can use as a client:

   kubectl run my-mysql-client --rm --tty -i --restart='Never' --image  docker.io/bitnami/mysql:8.4.2-debian-12-r2 --namespace default --env MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD --command -- bash

2. To connect to primary service (read/write):

   mysql -h my-mysql.default.svc.cluster.local -uroot -p"$MYSQL_ROOT_PASSWORD"



WARNING: There are "resources" sections in the chart not set. Using "resourcesPreset" is not recommended for production. For production installations, please set the following values according to your workload needs:
- primary.resources
- secondary.resources
  +info https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
---
Release "rocketmq" has been upgraded. Happy Helming!
NAME: rocketmq
LAST DEPLOYED: Wed Aug 28 10:30:48 2024
NAMESPACE: rocketmq-demo
STATUS: deployed
REVISION: 3
TEST SUITE: None
NOTES:
>>> Nameserver Address:
rocketmq-nameserver.rocketmq-demo.svc:9876

>>> Proxy Remoting Address:
rocketmq-proxy.rocketmq-demo.svc:8080

>>> Proxy gRPC Address:
rocketmq-proxy.rocketmq-demo.svc:8081

>>> RocketMQ Dashboard Auth:
username: admin   password: admin
username: user01  password: userPass
Modify "rocketmq-dashboard-cm" configmap to change the password
> 
> kubectl port-forward rocketmq-proxy-c45ff78b7-pwlpn  8081:8081 -n rocketmq-demo 
> 
> 
---

NAME: nacos
LAST DEPLOYED: Wed Aug 28 16:19:09 2024
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
1. Get the application URL by running these commands:
   https://nacos.example.commap[path:/ pathType:Prefix]
2. MODE:
   standalone: you need to modify replicaCount in the values.yaml, .Values.replicaCount=1
   cluster: kubectl scale sts default-nacos --replicas=3