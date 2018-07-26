import $ from 'jquery';

export function callSentimentAPI(payload, onSentimentScored) {
    $.ajax({
        type: "POST",
        beforeSend: function(request) {
            request.setRequestHeader("Ocp-Apim-Subscription-Key", "da28840f5a5244c395fd95a336b99c8e")
            request.setRequestHeader("Content-Type", "application/json")
        },
        url: 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
        data: JSON.stringify(payload),
        success: function (result) {
            if (result.documents.length > 0) {
                onSentimentScored(result.documents[0].score);
            } else {
                onSentimentScored(-1);
            }
        },
        async: true
    });
}


export function getSentiment(text, lastIntervalId, onSentimentScored, onIntervalCreated){
    if (lastIntervalId !== null) {
        clearTimeout(lastIntervalId);
    } 
    let payload = {
        "documents": [
          {
            "language": "en",
            "id": "1",
            "text": text
          }
        ]
      }
    let intervalId = setTimeout(function () {callSentimentAPI(payload, onSentimentScored)}, 400);
    onIntervalCreated(intervalId);
    return;
}