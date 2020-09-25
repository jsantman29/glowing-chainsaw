# Cleans the files that have been packaged from the layer.

set -o pipefail

echo Removing installed Python packages.
rm -r python/
echo Finished removing installed Python packages.

echo Removing zip folder.
rm -r python.zip
echo Finished removing zip folder.
