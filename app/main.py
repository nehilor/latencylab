from typing import Dict

from fastapi import FastAPI
from fastapi.responses import JSONResponse

from api.routers import health


def create_app() -> FastAPI:
    """Create and configure the FastAPI application."""
    app = FastAPI(
        title="LatencyLab API",
        description="Network latency testing and monitoring API",
        version="1.0.0",
        docs_url="/docs",
        redoc_url="/redoc",
    )

    # Include routers
    app.include_router(health.router, prefix="/api/v1", tags=["health"])

    return app


app = create_app()


@app.get("/", response_model=Dict[str, str])
async def root() -> Dict[str, str]:
    """Root endpoint returning API information."""
    return {
        "message": "LatencyLab API",
        "version": "1.0.0",
        "status": "running"
    }


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=8787,
        reload=True,
        log_level="info"
    )
