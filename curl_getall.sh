echo "\nListing all favorites"
curl -H "Content-Type: application/json" \
     -X GET \
     http://localhost:3000/favorites
