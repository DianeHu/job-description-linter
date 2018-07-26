import $ from 'jquery';

export function getSentiment(text){
    let ajaxResult = null;
    let payload = {
        "documents": [
          {
            "language": "en",
            "id": "1",
            "text": text
          }
        ]
      }
    $.ajax({
        type: "POST",
        beforeSend: function(request) {
            request.setRequestHeader("Ocp-Apim-Subscription-Key", "da28840f5a5244c395fd95a336b99c8e")
            request.setRequestHeader("Content-Type", "application/json")
        },
        url: 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
        data: JSON.stringify(payload),
        success: function (result) {
            ajaxResult = result;
        },
        async: false
    });
    return ajaxResult.documents[0].score;
}