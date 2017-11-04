FROM php:7.1-fpm

RUN echo "Modification du compte"
# On assigne le UserID 1000 a l'utilisateur www-data
RUN usermod -u 1000 www-data

# Installation de modules/packages
RUN pecl install xdebug

# Mise a jour des repos sources
RUN apt-get update && \
    apt-get install -y \
        zlib1g-dev \
        libicu-dev \
        nano \
        httpie \
    && docker-php-ext-install \
        zip \
        intl \
        opcache \
        pdo \
        pdo_mysql \
    && docker-php-ext-enable xdebug

RUN echo "Installation de Composer"
RUN curl -s https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

# Symfony Installer
RUN curl -LsS https://symfony.com/installer -o /usr/local/bin/symfony
RUN chmod a+x /usr/local/bin/symfony

# CACHE & LOGS DIRECTORY
RUN mkdir /var/www/cache
RUN mkdir /var/www/logs
RUN chown -R www-data:www-data /var/www/cache /var/www/logs

RUN echo "Ajout des alias"
RUN echo "alias ll='ls -lah --color'" >> ~/.bashrc
