import cv2
import easyocr
import matplotlib.pyplot as plt
from flask import Flask, request, jsonify

app = Flask(__name__)

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/webcam', methods=['POST'])
def form_inputs():
    try:
        # Get input data from the POST request as JSON
        data = request.json

        # Extract required fields
        age = data.get('age')
        # phone number
        woken = data.get('woken')
        sleepen = data.get('sleepen')
        given_time = data.get('given_time')
        per_day = data.get('perDay')

        # Perform calculations or schedule generation based on the input data
        # Replace this with your logic

        # # Example response
        # response_data = {
        #     'status': 'success',
        #     'message': 'Schedule calculated successfully',
        #     'age': age,
        #     'woken': woken,
        #     'sleepen': sleepen,
        #     'given_time': given_time,
        #     'per_day': per_day,
        #     # Add other calculated results here
        # }
        return jsonify(response_data)

    except Exception as e:
        # Handle any exceptions that might occur during processing
        return jsonify({'status': 'error', 'message': str(e)}), 500


# reads image (change to patch your path file)
def imageRead(age, woken, sleepen, given_time, perDay):
    image_path = '/Users/marcuskam/Desktop/nw/timecapsules/images/stockImage3.webp' 

    img = cv2.imread(image_path)

    reader = easyocr.Reader(['en'], gpu = False)

    text = reader.readtext(img)

    # print(text)

    def extract_text(data):
        return_text = []

        for item in data:
            return_text.append(item[1])

        complete_sentence = ' '.join(return_text)
        return complete_sentence

    complete_text = extract_text(text)

    print(complete_text)

    jasper(age, woken, sleepen, given_time, perDay, complete_text)
