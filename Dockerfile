# Stage 1: Install dependencies and build the app
FROM node:20-bullseye-slim AS builder

# Install system dependencies required for sharp and other packages
RUN apt-get update && apt-get install -y \
    libc6 \
    libvips \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files first to leverage caching
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Define build arguments
ARG NEXT_PUBLIC_FB_PIXEL_ID_MAIN
ARG NEXT_PUBLIC_GA_TRACKING_ID
ARG NEXT_PUBLIC_YANDEX_CODE
ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ARG NEXT_PUBLIC_SANITY_DATASET
ARG NEXT_PUBLIC_CAPTCHA_SITE_KEY
ARG NEXT_PUBLIC_EMAILJS_SERVICE_ID
ARG NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ARG NEXT_PUBLIC_EMAILJS_P_KEY
ARG NEXT_PUBLIC_APP_ENV

# Set environment variables
ENV NEXT_PUBLIC_FB_PIXEL_ID_MAIN=$NEXT_PUBLIC_FB_PIXEL_ID_MAIN
ENV NEXT_PUBLIC_GA_TRACKING_ID=$NEXT_PUBLIC_GA_TRACKING_ID
ENV NEXT_PUBLIC_YANDEX_CODE=$NEXT_PUBLIC_YANDEX_CODE
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID
ENV NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET
ENV NEXT_PUBLIC_DEV_API_URL=https://api.dev.instakash.net
ENV NEXT_PUBLIC_PROD_API_URL=https://api.instakash.net
ENV NEXT_PUBLIC_CAPTCHA_SITE_KEY=$NEXT_PUBLIC_CAPTCHA_SITE_KEY
ENV NEXT_PUBLIC_EMAILJS_SERVICE_ID=$NEXT_PUBLIC_EMAILJS_SERVICE_ID
ENV NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ENV NEXT_PUBLIC_EMAILJS_P_KEY=$NEXT_PUBLIC_EMAILJS_P_KEY
ENV NEXT_PUBLIC_APP_ENV=$NEXT_PUBLIC_APP_ENV
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PRIVATE_STANDALONE=true

# Build the Next.js standalone app
RUN yarn build

# Stage 2: Create a minimal runtime image
FROM node:20-bullseye-slim AS runner

# Create and use a non-root user for security
RUN addgroup --system --gid 1001 nextjs \
    && adduser --system --uid 1001 nextjs

USER nextjs

# Set working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_PUBLIC_FB_PIXEL_ID_MAIN=$NEXT_PUBLIC_FB_PIXEL_ID_MAIN
ENV NEXT_PUBLIC_GA_TRACKING_ID=$NEXT_PUBLIC_GA_TRACKING_ID
ENV NEXT_PUBLIC_YANDEX_CODE=$NEXT_PUBLIC_YANDEX_CODE
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID
ENV NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET
ENV NEXT_PUBLIC_DEV_API_URL=https://api.dev.instakash.net
ENV NEXT_PUBLIC_PROD_API_URL=https://api.instakash.net
ENV NEXT_PUBLIC_CAPTCHA_SITE_KEY=$NEXT_PUBLIC_CAPTCHA_SITE_KEY
ENV NEXT_PUBLIC_EMAILJS_SERVICE_ID=$NEXT_PUBLIC_EMAILJS_SERVICE_ID
ENV NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ENV NEXT_PUBLIC_EMAILJS_P_KEY=$NEXT_PUBLIC_EMAILJS_P_KEY
ENV NEXT_PUBLIC_APP_ENV=$NEXT_PUBLIC_APP_ENV
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PRIVATE_STANDALONE=true
ENV PORT=3000

# Expose the app's port
EXPOSE 3000

# Start the standalone Next.js server
CMD ["node", "server.js"]
