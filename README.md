# A JWT has generally 3 parts:

1. Header: Contains the algorithm and type of token.
2. Payload: Contains the data sent to the user.
3. Signature: Contains encrypted data.

# Encoding

1. Header and Payload are **Base64 Encoded**.
2. Signature of JWT is created using an algorithm which takes Base64 encoded Header and Payload with a '.' in between and 
then pass them through the algorithm  mentioned in the Header with a *Secret Key* which is stored on the server side.

After that Signature is added with a '.' to the base64 encoded Header and Payload as:
    base64Encoded(Header).base64Encoded(Payload).Signature

# Decoding

1. base64Encoded(Header).base64Encoded(Payload) is passed through the algorithm(in the header) and 
if the resultant matches with the Signature, the data is accepted otherwise it is not.

# Security

Anyone with the JWT can see the Header and Payload but cannot modify it as if they do, the Signature won't match and thus it will not be accepted.
As anyone can see the payload, sensitive information should not be sent in the JWT only the info needed to authorize the user.

# Disadvantages

Anyone with the JWT can act as user and as server doesn't hold any data, it cannot stop it. 
Some web servers keep a *Blacklisted JWT List* to block access to JWTs being reported misused.

# Goals

    1. Create Encoding and Decoding functionalities for JWTs.
    2. Do it with a class rather than functions.
    3. Create this in Typescript with strong type support.
    4. Support different algorithms for creating Signature.
