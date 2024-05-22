url: https://kubernetes.io/zh-cn/docs/tasks/access-application-cluster/web-ui-dashboard/

 kubectl -n kubernetes-dashboard port-forward svc/kubernetes-dashboard-kong-prox


kubectl -n kubernetes-dashboard create token admin-user
