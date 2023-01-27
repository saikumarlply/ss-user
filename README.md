# ss-user


# store
curl --location --request POST 'https://ssmms.herokuapp.com/api/SSMMS-user/create' \
--header 'auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzRhYzlkNjhiMDM1YjhjY2E2NDVkOGQiLCJpYXQiOjE2NjU4NDY5MTJ9.VpCqET69tKT1jhUhK0iIVUoSDHLO9QgjvOYG73Chwgg' \
--header 'Content-Type: application/json' \
--data-raw '{
    "villageName": "shivaji",
    "userName": "12345667",
    "userPassword": "password",
    "email":"shivaji@gmail.com"
}'



# retireve

https://ssmms.herokuapp.com/api/SSMMS-user?userName=12345667
