import cv2
import easyocr
import matplotlib.pyplot as plt

# reads image (change to patch your path file)
image_path = '/Users/marcuskam/Desktop/nw/stockImage3.webp' 

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
