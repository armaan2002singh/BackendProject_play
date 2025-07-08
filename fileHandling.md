# File handling is not done on our server, third party services are used

- always make separate function for it.
## Servies are used for this

- common service is used to do this is cloudnary
- not only the cloudnary, one more package is used ExpressFile upload, but we will use Multer.
- steps we will use multer to store file in our server then we will store that file to the cloudnary, because it will make chance for that file reappear faster and will be so for app. - there is thing called fs - file system used in the file settings can learn it from --> node fs documentary- important to learn about unlink the fs docs
# multer - will create a middleware by using the multer- middleware is like using the concept in the middle before executing the main methods.- read the diskStorage concept of the multer- how it will work is explained in the video - 10 of chaiourCode with time-stamp 35:10