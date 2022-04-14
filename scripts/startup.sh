#!/bin/bash

sleep 5

echo "Starting up..."

if [ "$NODE_ENV" != "test" ] && [ "$SHOULD_RUN_DATABASE_MIGRATE" = "true" ]; then
  echo "Running database migrations..."
  npm run migrate
fi

if [ "$NODE_ENV" != "test" ] && [ "$SHOULD_RUN_DATABASE_SEED" = "true" ]; then
  echo "Running database seeds..."
  npm run seed
fi

if [ "$NODE_ENV" = "test" ] && [ "$DATABASE_HOST" = "db" ]; then
  echo "Starting tests..."
  echo "Running database migrations..."
  npm run migrate
  echo "Running database seeds..."
  npm run seed
  echo "Running tests..."
  npm run start & npm run test
fi

if [ "$NODE_ENV" = "test" ] && [ "$DATABASE_HOST" != "db" ]; then
  echo "For protection, tests cannot be run against a database other than the local database host specified in the docker-compose file."
  echo "The tests would destroy data in the db."
fi

if [ "$NODE_ENV" = "local" ]; then
  echo "Running in local mode..."
  npm run start:local
fi

if [ "$NODE_ENV" = "dev" ]; then
  echo "Running in dev mode..."
  npm run start
fi

if [ "$NODE_ENV" = "stg" ]; then
  echo "Running in stg mode..."
  npm run start
fi

if [ "$NODE_ENV" = "prod" ]; then
  echo "Running in prod mode..."
  npm run start
fi
