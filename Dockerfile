FROM oven/bun:1.0 as build

WORKDIR /usr/app

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY . .

RUN bun run build

FROM nginx:stable

COPY --from=build /usr/app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
