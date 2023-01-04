## Setup redis
# Install redis server
brew install redis

# Starting and stopping Redis in the foreground
redis-server

# Starting and stopping Redis in the background
brew services start redis

# Stop redis
brew services stop redis

# Run demo
node main