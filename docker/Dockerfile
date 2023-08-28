# Etapa de construcción
FROM node:14-alpine AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar las dependencias
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Construir la aplicación
COPY . ./
RUN yarn build

# Etapa de ejecución
FROM nginx:1.19-alpine

# Copiar el build a la carpeta de nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]