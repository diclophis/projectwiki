FROM ubuntu:18.04

ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y apache2 apache2-utils libapache2-mod-php php-xml

RUN a2enmod php7.2 headers rewrite
RUN a2dissite 000-default
RUN echo "Listen 8080" | tee /etc/apache2/ports.conf

ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_PID_FILE /var/run/apache2.pid
ENV APACHE_LOCK_DIR /var/lock/apache2
ENV APACHE_RUN_DIR /var/run/apache2

ADD projectwiki.conf /etc/apache2/sites-available/projectwiki.conf
RUN a2ensite projectwiki

ADD ajax.php blank.html empty.php index.php javascript.js libTiddlyWiki.php noscript.css prototype.js style.css /var/www/html/
RUN mkdir -p /var/www/html/wikis; chown www-data /var/www/html/wikis

#RUN htpasswd -cb /etc/apache2/webdav.password guest guest
#RUN chown root:www-data /etc/apache2/webdav.password
#RUN chmod 640 /etc/apache2/webdav.password

RUN apache2 -t

CMD ["apache2", "-D", "FOREGROUND"]
