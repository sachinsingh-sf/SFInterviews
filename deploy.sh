sfdx force:org:create -f config/project-scratch-def.json -a $1 -d 30 -s &&
sfdx force:source:push 
