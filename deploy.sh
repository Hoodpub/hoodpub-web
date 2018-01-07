ng build --prod
aws s3 sync dist s3://www.hoodpub.com --profile pointer --region ap-northeast-2
