echo "Adding a location to favorite"
curl -d '{"name":"Durham, North Carolina", "zip":"27708"}' \
     -H "Content-Type: application/json" \
     -X POST \
     http://localhost:3000/favorites
