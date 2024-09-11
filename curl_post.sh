echo "Adding a location to favorite"
curl -d '{"name":"North Carolina, Durham", "zip":"27708"}' \
     -H "Content-Type: application/json" \
     -X POST \
     http://localhost:3000/favorites
