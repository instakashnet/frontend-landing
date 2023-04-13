# Production image, copy all the files and run next
FROM node:16-alpine AS runner

ARG NEXT_PUBLIC_FB_PIXEL_ID_MAIN
ARG NEXT_PUBLIC_GA_TRACKING_ID
ARG NEXT_PUBLIC_YANDEX_CODE

ENV NEXT_PUBLIC_FB_PIXEL_ID_MAIN=$NEXT_PUBLIC_FB_PIXEL_ID_MAIN
ENV NEXT_PUBLIC_GA_TRACKING_ID=$NEXT_PUBLIC_GA_TRACKING_ID
ENV NEXT_PUBLIC_YANDEX_CODE=$NEXT_PUBLIC_YANDEX_CODE

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
RUN chown -R nextjs:nextjs /app/.next

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "start"]