all:
	docker run -p 3000:3000 -it --rm \
	  -v ~/.ssh/id_rsa:/home/node/.ssh/id_rsa:ro \
	  -v ~/.ssh/known_hosts:/home/node/.ssh/known_hosts:ro \
	  -v ~/.gitconfig:/home/node/.gitconfig:ro \
	  -v $(CURDIR):$(CURDIR) \
	  -w $(CURDIR) \
	  -u node \
	  node:latest bash

install:
	docker run -it --rm \
	  -v $(CURDIR):$(CURDIR) \
	  -w $(CURDIR) \
	  node:alpine yarn

lint:
	docker run -it --rm \
	  -v $(CURDIR):$(CURDIR) \
	  -w $(CURDIR) \
	  node:alpine yarn lint

start:
	docker run -p 3000:3000 -it --rm \
	  -v $(CURDIR):$(CURDIR) \
	  -w $(CURDIR) \
	  node:alpine yarn start --ci
