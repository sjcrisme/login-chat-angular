// Service
function smessage() {
  this.getAllmessages = function() {
      return [
                { 'author':"tester", 'time':"" ,'content':"hello man"},
                { 'author':"guest12", 'time':"" ,'content':"hello"},
                { 'author':"old man", 'time':"" ,'content':"hi"},
                { 'author':"flower", 'time':"" ,'content':"hihihi:)"},
                { 'author':"topGun", 'time':"" ,'content':"stop spam !"},
                { 'author':"nick", 'time':""  ,'content':"Banana!!!"},
                { 'author':"Putlin", 'time':""  ,'content':"Comrats"},
                { 'author':"ChakNoriss", 'time':""  ,'content':"Hiyyya!"},
            ];
  };
}
angular
  .module('chat.mesage',[])
  .service('Smessage', smessage);