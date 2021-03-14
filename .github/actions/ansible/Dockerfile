FROM alpine 

ENV ANSIBLE_HOST_KEY_CHECKING=False

RUN apk add ansible gcc python3-dev libc-dev libffi-dev openssl-dev
RUN apk add python3 py3-pip openssh-client
RUN pip3 install --upgrade paramiko

COPY hosts /hosts
COPY ansible.cfg /etc/ansible/ansible.cfg

RUN mkdir ~/.ssh
COPY ubuntu.pem ~/.ssh/ubuntu.pem

RUN chmod 400 ~/.ssh/ubuntu.pem

COPY entrypoint.sh /entrypoint.sh

CMD ["sh", "/entrypoint.sh"]