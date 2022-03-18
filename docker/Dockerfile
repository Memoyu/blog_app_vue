FROM nginx 
MAINTAINER blogapp
RUN echo $(ls -1)
COPY . /usr/share/nginx/html/ 
COPY nginx.conf /etc/nginx/nginx.conf
RUN echo 'build img ok!'