import pytest
from fastapi.testclient import TestClient

from main import app


@pytest.fixture
def client() -> TestClient:
    """Create a test client for the FastAPI application."""
    return TestClient(app)


def test_root_endpoint(client: TestClient) -> None:
    """Test the root endpoint returns correct information."""
    response = client.get("/")

    assert response.status_code == 200
    data = response.json()
    assert data["message"] == "LatencyLab API"
    assert data["version"] == "1.0.0"
    assert data["status"] == "running"


def test_health_status_endpoint(client: TestClient) -> None:
    """Test the health status endpoint returns ok status."""
    response = client.get("/api/v1/status")

    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
