# TimeCapsules
<b>Inspiration:</b> <br>
<br>
There are over 800 million people around the world over the age of 65, and as healthcare advances, the elderly population will increase even faster. The one thing they all have in common is that they frequently take some medication or pills. In fact, almost 90% of older adults regularly take at least one prescription drug, and almost 80% regularly take at least two prescription drugs. Whether it be for lowering cholesterol or just fulfilling your daily Vitamin C intake, they are essential for maintaining the health of people of all ages.

However, the text on the medical bottles is often small and complex, making it hard to understand, especially for the elderly or visually impaired.

About 1 in 9 people age 65 and older has some form of Alzheimer's. Especially when people usually take more than one type of medication, it becomes hard to manage when and how often to take each one.

That's where TimeCapsules comes in.

<b> What it does: </b>
<br>
TimeCapsules uses Computer Vision, AI, and SMS to innovate how we use medication. Our application will leverage OpenCV to take a picture of your pill bottle, parse the text, and then utilize OpenAI to interpret, and create a custom SMS reminder to your phone. Twilio will then send text reminders to take your pills depending on the instructions listed on the bottle.

Start by filling in some basic information, and then simply face the bottle to your camera. It will snap a photo and interpret the text. It will now be added to a dashboard where you can manage all your medications. The app will also send a text to your phone when you wake up, reminding you to take your pills! Depending on the instructions, it will continue to text you throughout the day.

<b> How we built it: </b> 
<br>
Front-end: React <br>
Backend: Python, Flask APIs: OpenCV, OpenAI, Twillio
<br>
Please check out https://devpost.com/software/timecapsules for a full rundown! 

<b> Requirements: </b> 
<br>
Python3 3.11.5 <br>
easyocr == 1.6.2 (pip3 install easyocr) <br>
matplotlib == 3.6.2 (pip3 install matplotlib) <br>
opencv-python-headless == 4.5.4.60 (pip3 install opencv-python-headless) <br>
<br>

<b> How to get started: </b> <br>
Backend: <br>
in the backend folder, make sure there is a venv file. run ". venv/bin/activate" to activate virtual env. <br>
make sure u have all the requirements downloaded in the vm (use pip is okay) <br>
make sure the venv is in Python3 3.11.5 (can do by running python3.11 -m venv venv during venv setup) <br>
run "python3 mk-altogether.py" to start the server <br>
to deactivate, just type in "deactivate" into the terminal <br>
<br>
Frontend:
<br>
cd to frontend/react folder <br>
npm i <br>
npm i kute.js <br>
npm i react-webcam <br>
npm i react-icons <br>
npm i react-router-dom <br>
npm i react-checkmark <br>
npm start <br>

<b> Please checkout https://devpost.com/software/timecapsules for more info and code snippets! </b>
