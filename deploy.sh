ng build --prod
aws s3 sync dist s3://www.hoodpub.com --profile pointer --region ap-northeast-2

aws cloudfront create-invalidation  --invalidation-batch file://invbatch.json  --distribution-id E75LV98OP1JEF --profile pointer --region ap-northeast-2
