FROM nginx:latest

RUN rm -r /etc/nginx/conf.d/default.conf
COPY ./files/tomcat.conf /etc/nginx/conf.d/
