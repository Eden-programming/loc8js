import pytest

from app.main import init_app
from app.settings import BASE_DIR, get_config
from app.init_db import (
    setup_db,
    teardown_db,
    create_tables,
    drop_tables
)

TEST_CONFIG_PATH = BASE_DIR / 'config' / 'test.yaml'


@pytest.fixture
async def cli(loop, test_client, db):
    app = await init_app(['-c', TEST_CONFIG_PATH.as_posix()])
    return await test_client(app)


@pytest.fixture(scope='module')
def db():
    test_config = get_config(['-c', TEST_CONFIG_PATH.as_posix()])

    setup_db(test_config['postgres'], override=True)
    yield
    teardown_db(test_config['postgres'])


@pytest.fixture
def tables_and_data():
    create_tables()
    yield
    drop_tables()
