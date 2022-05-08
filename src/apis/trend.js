import request from "../utils/request";
import xml2js from "xml2js";
export default {
  getTrendList: (url) => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .then(function (response) {
          // handle success
          // console.log(response);
          let xml = (response && response.data) || {};
          let data = [];
          xml2js.parseString(xml, function (err, result) {
            let channel_items = result.rss.channel[0].item || [];
            channel_items.map((item) => {
              console.log(item)
              data.push({
                author: (item.author && item.author[0]) || "",
                shares: parseInt(item["buzzsumo:shares"][0]["buzzsumo:total"][0]) || "",
                description: item.description[0] || "",
                score: parseInt(item["buzzsumo:shares"][0]["buzzsumo:trending_score"][0]) || "",
                description: item.description[0] || "",
                link: item.link[0] || "",
                pubDate: item.pubDate[0] || "",
                title: item.title[0] || "",
                enclosure: item.enclosure[0]["$"]["url"] || "",
              });
            });
            // console.dir(data);
            resolve(data)
          });
          // console.log(xml2js)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          reject(error)
        })
        .then(function () {
          // always executed
        });
    });
  },
};
