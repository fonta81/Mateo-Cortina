# ============================================================
# Dockerfile multistage para MiPresentacion (Vite + React)
# ============================================================

# ------------------------------------------------------------
# Stage 1: builder — instala dependencias y genera el build
# ------------------------------------------------------------
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ------------------------------------------------------------
# Stage 2: dev — servidor de desarrollo de Vite
# ------------------------------------------------------------
FROM node:20-alpine AS dev
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 5173

CMD ["sh", "-c", "npm run dev -- --host"]

# ------------------------------------------------------------
# Stage 3: prod — Nginx sirviendo los archivos estáticos
# ------------------------------------------------------------
FROM nginx:alpine AS prod
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
