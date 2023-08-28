.DEFAULT_GOAL := help

TYPE_APP 		= front
SERVICE_NAME 	= inventory
ENV 			= dev

PROJECT_NAME 	= ${TYPE_APP}-${SERVICE_NAME}-${ENV}

#Params ECR
NAME_PROJECT_APP = app-${PROJECT_NAME}
PORT_APP = 3000

build.image: ## Build image for application.: make build.image
	@ docker build  \
		-f docker/Dockerfile \
		-t ${NAME_PROJECT_APP}:latest \
		./app \
		--no-cache

run.app: ## Run image for application.: make run.app
	@docker run \
		-p ${PORT_APP}:80 -d ${NAME_PROJECT_APP}:latest\
