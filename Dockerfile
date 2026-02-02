# Multi-stage build for Astro site with Node.js
# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Enable pnpm via corepack (Node.js built-in package manager manager)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy lock file and package manifest for dependency installation
COPY pnpm-lock.yaml package.json ./

# Install dependencies with frozen lockfile (ensures reproducible builds)
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the Astro application
RUN pnpm build

# Stage 2: Runtime
FROM node:22-alpine

WORKDIR /app

# Enable pnpm in runtime image as well (needed for start script)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Create non-root user for security (avoid running as root)
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

# Copy only necessary files from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Install production dependencies only (no devDependencies)
RUN pnpm install --frozen-lockfile --prod

# Switch to non-root user
USER nodejs

# Expose port 3001 for incoming connections
EXPOSE 3001

# Health check (attempts to connect to localhost:3001 every 30s)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost:3001/ || exit 1

# Start the application
# HOST=0.0.0.0 makes the server accessible from outside the container
# PORT=3001 matches the exposed port
CMD ["pnpm", "start"]
