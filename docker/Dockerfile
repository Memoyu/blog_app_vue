FROM nginx 
MAINTAINER blogapp
COPY . /usr/share/nginx/html/ 
RUN echo $(ls -1 /usr/share/nginx/html/)
COPY nginx.conf /etc/nginx/nginx.conf
RUN echo 'build img ok!'