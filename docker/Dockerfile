FROM nginx 
MAINTAINER blogapp
RUN echo $(ls)
COPY . /usr/share/nginx/html/ 
COPY nginx.conf /etc/nginx/nginx.conf
RUN echo 'build img ok!'