# Fast Api App

## requirements

from fastapi import FastAPI
from pydantic import BaseModel
#from nameko.rpc import rpc
#from nameko.standalone.rpc import ClusterRpcProxy

class Student(BaseModel):
    firstname:str
    lastname:str
    email:str

app = FastAPI() # FlaskApp()
class Body(BaseModel):
    bitstring : str



@app.get("/")
def hello():
    return {"Hello": "World"}

@app.get("/b2s/{b}")
async def read_item(b):
    s = int(b[0])
    e = int(b[1:9], 2)
    f = [ int(x) for x in b[9:] ]
    f = sum( [ f[i]*2**(-(i+1)) for i in range(len(f)) ] )
    x = 1 + f
    v = (-1)**s * 2**(e-127) * x
    return {"Result": v}

@app.post("/b2s/")
async def tttt(body: Body):
    b = body.bitstring
    s = int(b[0])
    e = int(b[1:9], 2)
    f = [ int(x) for x in b[9:] ]
    f = sum( [ f[i]*2**(-(i+1)) for i in range(len(f)) ] )
    x = 1 + f
    v = (-1)**s * 2**(e-127) * x
    return {"Result": v}