# CloudPix: A Scalable Image Storage and Management Application with ReactJS and Firebase

## INTRODUCTION 

In today's rapidly evolving technological landscape, the development of web applications has become increasingly complex and demanding. As businesses and organizations strive to deliver seamless user experiences, scalable solutions, and efficient resource management, the role of cloud services has become pivotal. Cloud services offer a powerful and flexible platform for developing web applications, allowing developers to harness the advantages of cloud computing and leverage its vast array of services. By shifting the infrastructure and computational resources to the cloud, developers can focus more on building and enhancing their web applications, rather than managing hardware and software infrastructure. This guide provides an overview of developing web applications using cloud services and exploring the  benefits, challenges, and best practices associated with this approach. We will delve  into the key components of cloud computing, such as Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS), and examine how they can be utilized to create robust, scalable, and cost-effective web applications.

## MODEL
### Model-View-Controller (MVC) Model:
In this model, the web application is divided into three components: the model (which represents the data and logic), the view (which means the user interface), and the controller (which handles user input and updates the model and view accordingly). 

*Other models:*
Client-Server Model: In this model, the web application is designed to have a client-side and a server-side component. The client-side code runs in the user's browser, while the server-side code runs on the cloud server. The client sends requests to the server, which responds with data or performs actions. 

*Microservices Model:* In this model, the web application is divided into smaller, independent services that can be developed, deployed, and scaled independently. Each service performs a specific function, and they communicate with each other via APIs. 

*Serverless Model:* In this model, the web application is designed to run on a serverless architecture, which means that the cloud provider handles the infrastructure and scaling of the application. The developer only needs to provide the application code executed in response to requests.

## METHODS 
### Firebase
Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development. Firebase provides backend services to web/mobile apps. Services include a real-time NoSQL database, cloud storage, hosting, and authentication API which includes popular social logins like Google, Facebook, GitHub, and so on. Using a platform like Firebase speeds up the development process.
Firebase provides a lot of services, we have
 - Authentication
 - Cloud Firestore
 - Cloud storage
 - Hosting 
### Firebase Authentication 
Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
### Cloud Firestore 
Cloud Firestore is a NoSQL document database that lets you easily store, sync, and query data for your mobile and web apps - at a global scale. Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud. Like Firebase Realtime Database, it keeps your data in sync across client apps through real-time listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity. Cloud Firestore also offers seamless integration with other Firebase and Google Cloud products, including Cloud Functions. 
### Cloud Storage 
Cloud Storage for Firebase is built for app developers who need to store and serve user-generated content, such as photos or videos. Cloud Storage for Firebase is a powerful, simple, and cost-effective object storage service built for Google scale. The Firebase SDKs for Cloud Storage add Google security to file uploads and downloads for your Firebase apps, regardless of network quality.
### Idea and Working
When the user first visits the webpage, they are asked to log in with their Google account. Once they log in they are directed to the home page where they can view pictures that are uploaded by everyone. On the profile page, a user can view the pictures which they uploaded. A user can delete their picture. Users can log out from the website as well.
