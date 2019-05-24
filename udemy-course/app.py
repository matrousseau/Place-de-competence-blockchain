from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')

def hello_world():
    return 'Hello world'

if __name__ == "__main__":
    app.run(debug=True)

@app.route('/add_two_nums', methods=["POST","GET"])
def add_two_nums():
    print('In add_two_nums')
    datadict = request.get_json()
    print(datadict['prenom'])
    # nom = datadict['prenom']
    return 'datadict' # jsonify(datadict)

@app.route('/hithere')
def hi_there_everyone():

    retJson = {
        "quiz": {
            "sport": {
                "q1": {
                    "question": "Which one is correct team name in NBA?",
                    "options": [
                        "New York Bulls",
                        "Los Angeles Kings",
                        "Golden State Warriros",
                        "Huston Rocket"
                    ],
                    "answer": "Huston Rocket"
                }
            },
            "maths": {
                "q1": {
                    "question": "5 + 7 = ?",
                    "options": [
                        "10",
                        "11",
                        "12",
                        "13"
                    ],
                    "answer": "12"
                },
                "q2": {
                    "question": "12 - 8 = ?",
                    "options": [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    "answer": "4"
                }
            }
        }
    }
    return jsonify(retJson)
