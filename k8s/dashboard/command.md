url: https://kubernetes.io/zh-cn/docs/tasks/access-application-cluster/web-ui-dashboard/

helm upgrade --install kubernetes-dashboard kubernetes-dashboard/kubernetes-dashboard --create-namespace --namespace kubernetes-dashboard

 kubectl -n kubernetes-dashboard port-forward svc/kubernetes-dashboard-kong-prox


kubectl -n kubernetes-dashboard create token admin-user
