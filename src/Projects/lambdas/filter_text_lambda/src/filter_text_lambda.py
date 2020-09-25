import json
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize 

nltk.data.path.append('/opt/python/nltk_data')

def lambda_handler(event, context):
    
    response = None
    
    try:
        text = event['text']
        filtered_text = filter_text(text)
        response = get_success_response(filtered_text)

    except KeyError:
        response = get_bad_request_response('A required field was missing in the request: text')
    
    return response

def get_success_response(text):
    return {
        'statusCode': 200,
        'body': text
    }
    
def get_bad_request_response(msg):
    return {
        'statusCode': 400,
        'body': msg
    }
    
def filter_text(text):
    
    common_words = set(stopwords.words('english'))
    word_tokens = word_tokenize(text)
    filtered_words = []

    for w in word_tokens:
        if w not in common_words:
            filtered_words.append(w)
    
    filtered_string = " ".join(filtered_words)
    return filtered_string

