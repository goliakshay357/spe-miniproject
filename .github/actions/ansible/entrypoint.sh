#!/bin/sh

echo "Ansible Entrypoint"

ansible-playbook -i hosts ansible/playbook.yml --user ubuntu