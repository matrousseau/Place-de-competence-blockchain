from flask import Flask, jsonify, request
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

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

    # def get(self):
    #
    # def put(self):
    #
    # def delete(self):


# class Subtract(Ressource):
#     pass
#
# class Multiply(Ressource):
#     pass
#
# class Divide(Ressource):
#     pass


@app.route('/')
def hello_world():
    return 'Hello world'

if __name__ == "__main__":
    app.run(debug=True)
