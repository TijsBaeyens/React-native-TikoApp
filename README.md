# Tikoo Event Scanner
This React Native app enables users to scan QR codes for event ticket verification.

## Overview
The app consists of three main components:

## Pages
### StartPage
The initial screen welcoming users and displaying the selected event information. Users can navigate to the QR code scanning page from here.

### QRPage
Utilizes the device's camera to scan QR codes. Once a QR code is scanned, the app communicates with the Tikoo API to verify the ticket. Depending on the API response, it navigates users to the appropriate page: 'OKPage' for successful verification and 'NOKPage' for unsuccessful verification.

### OKPage and NOKPage
Displays success or failure messages accordingly after verifying the scanned QR code against the Tikoo API.

## Installation
To run the app locally, follow these steps:
```
1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using npm install or yarn install.
4. Run the app using npx expo start or yarn expo start.
5. Use an emulator or scan the QR code with the Expo app to view the app on a mobile device.
```
## Technologies Used
```
React Native
Expo Camera
Tikoo API
```
## Usage
Launch the app on a mobile device or emulator.
The StartPage will appear, displaying the selected event information and a button to scan QR codes.
Tap the "Scan de QR codes" button to navigate to the QRPage.
Allow camera permissions if prompted.
Scan a valid QR code. The app will communicate with the Tikoo API to verify the ticket.
Based on the API response, users will be directed to the 'OKPage' or 'NOKPage' for further instructions.
When on one of those pages, the user can click "Scan volgende QR" to scan a new QR code.

## Acknowledgments
This app was created for usage purposes and is connected to a live production environment. The Tikoo API used here may or may not reflect real-time data.
