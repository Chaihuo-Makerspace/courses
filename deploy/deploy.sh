#!/bin/bash

# Deploy script for Seeed Course Website
# Pulls latest Docker images and restarts services

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output with timestamp
log_info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] ✓${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] ⚠${NC} $1"
}

log_error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ✗${NC} $1" >&2
}

# Function to handle errors
on_error() {
    log_error "部署失败！"
    exit 1
}

trap on_error ERR

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

log_info "🚀 开始部署..."

# ============================================================================
# 1. 检查前置条件
# ============================================================================

log_info "检查前置条件..."

# Check if docker is installed
if ! command -v docker &> /dev/null; then
    log_error "Docker 未安装"
    exit 1
fi
log_success "Docker 已安装"

# Check if docker-compose is installed
if ! command -v docker-compose &> /dev/null; then
    log_error "docker-compose 未安装"
    exit 1
fi
log_success "docker-compose 已安装"

# Check if docker daemon is running
if ! docker ps &> /dev/null; then
    log_error "Docker daemon 未运行，请启动 Docker"
    exit 1
fi
log_success "Docker daemon 正常运行"

# Check if docker-compose.yml exists
if [ ! -f "$SCRIPT_DIR/docker-compose.yml" ]; then
    log_error "docker-compose.yml 文件不存在"
    exit 1
fi
log_success "检查配置文件"

# Check if .env file exists (optional but recommended)
if [ ! -f "$SCRIPT_DIR/.env" ]; then
    log_warn ".env 文件不存在，将使用默认配置（IMAGE_TAG=latest）"
else
    log_success ".env 文件已存在"
fi

# ============================================================================
# 2. 拉取最新镜像
# ============================================================================

log_info "📥 拉取最新镜像..."

cd "$SCRIPT_DIR"

if ! docker-compose pull; then
    log_error "镜像拉取失败"
    exit 1
fi

log_success "镜像拉取完成"

# ============================================================================
# 3. 停止旧容器
# ============================================================================

log_info "🔄 停止旧容器..."

if docker-compose ps 2>/dev/null | grep -q "Up"; then
    if ! docker-compose down; then
        log_error "停止容器失败"
        exit 1
    fi
    log_success "旧容器已停止"
else
    log_warn "未发现运行中的容器"
fi

# ============================================================================
# 4. 启动新容器
# ============================================================================

log_info "🚀 启动新容器..."

if ! docker-compose up -d; then
    log_error "启动容器失败"
    exit 1
fi

log_success "服务已启动"

# ============================================================================
# 5. 等待服务启动
# ============================================================================

log_info "⏳ 等待服务启动..."
sleep 3

# ============================================================================
# 6. 清理旧镜像
# ============================================================================

log_info "🧹 清理未使用的镜像..."

if ! docker image prune -f --filter "dangling=true" &> /dev/null; then
    log_warn "清理镜像时出现警告，但继续进行"
fi

log_success "旧镜像已清理"

# ============================================================================
# 7. 显示部署状态
# ============================================================================

log_info "📊 显示服务状态..."
echo ""
docker-compose ps
echo ""

# ============================================================================
# 8. 显示最近日志
# ============================================================================

log_info "📋 最近日志（最后 50 行）..."
echo ""
docker-compose logs --tail=50
echo ""

# ============================================================================
# 完成
# ============================================================================

log_success "🎉 部署完成！"

# Print summary
echo ""
echo -e "${GREEN}=== 部署总结 ===${NC}"
echo "部署时间: $(date +'%Y-%m-%d %H:%M:%S')"
echo "服务目录: $SCRIPT_DIR"
echo "状态: 运行中"
echo ""
echo "常用命令:"
echo "  查看日志: docker-compose logs -f"
echo "  停止服务: docker-compose down"
echo "  查看状态: docker-compose ps"
echo ""
