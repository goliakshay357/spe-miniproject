#!/bin/sh

echo "Ansible Entrypoint"

ls

pwd

ansible-playbook -i ansible/hosts ansible/playbook.yml --user ubuntu