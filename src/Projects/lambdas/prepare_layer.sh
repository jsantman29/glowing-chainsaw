# Prepares the ZIP file containing a Python folder to be published as an AWS Lambda Layer.

set -o pipefail

echo Preparing Python libraries.
pip install --target ./python -r requirements.txt
echo Finished prepping libraries.

echo Zipping file.
zip -r python.zip python/
echo Finished zipping file.
