# 2020.capitoledulibre.org

The project was created with Docker:

```
docker run --rm -it --user node -v "$PWD":/home/node/app -v "$HOME/.gitconfig":/home/node/.gitconfig -w /home/node/app node:lts npx gatsby new 2020.capitoledulibre.org
cd 2020.capitoledulibre.org
```

To run the project in dev in Docker:

```
docker run --rm -it --user node -v "$PWD":/home/node/app -v "$HOME/.gitconfig":/home/node/.gitconfig -w /home/node/app node:lts yarn install
docker run --rm -it --user node -v "$PWD":/home/node/app -v "$HOME/.gitconfig":/home/node/.gitconfig -w /home/node/app -p 8000:8000 node:lts yarn run develop -- --host=0.0.0.0
```
