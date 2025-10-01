from typing import Dict

from fastapi import APIRouter

router = APIRouter()


@router.get("/status", response_model=Dict[str, str])
async def get_status() -> Dict[str, str]:
    """
    Health check endpoint.

    Returns:
        Dict[str, str]: Status information with 'ok' status
    """
    return {"status": "ok"}
