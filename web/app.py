from flask import Flask, jsonify, request
from flask_restful import Api, Resource

from pymongo import MongoClient


app = Flask(__name__)
api = Api(app)

client = MongoClient('mongodb://db:27017')

db = client.aNewDb
UserNum = db['UserNum']
UserNum.insert({
    'num_of_user' : 0

})


class Visit(Resource):
    def get(self):
        prev_num = UserNum.find({})[0]['num_of_user']
        prev_num +=1
        UserNum.update({}, {"$set": {"num_of_user": prev_num}})
        return str("Hello use" + str(prev_num))

class Add(Resource):
    def post(self):
        postedData = request.get_json()
        x = postedData['x']
        y = postedData['y']
        print(x,y)
        x=int(x)
        y=int(y)

        res = x+y
        resJon = {
        "Sum" : res,
        "Status code" : 200
        }

        return jsonify(resJon)

api.add_resource(Add, "/add")
api.add_resource(Visit, "/visit")



@app.route('/')
def hello_world():
    return 'Hello world'

if __name__ == "__main__":
    app.run(host='0.0.0.0')
