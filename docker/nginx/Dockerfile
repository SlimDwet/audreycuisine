FROM nginx

RUN echo "Modification du compte"
# On assigne le UserID 1000 a l'utilisateur www-data
RUN usermod -u 1000 www-data

RUN apt-get update && \
    apt-get install -y \
        nano \
        httpie

RUN echo "Creation du vhost"
COPY ./audreycuisine.conf /etc/nginx/conf.d/

RUN echo "Définition du work directory"
WORKDIR /var/www/html

RUN echo "Ajout des alias"
RUN echo "alias ll='ls -lah --color'" >> ~/.bashrc
