exports.summy = function (feeds) {
  var res = new Summy();
  console.log("Let's summy");
  console.log("Total entry: %d", feeds.data.length);

  for( var i = 0; i < feeds.data.length; i++ ) {
      var post = feeds.data[i];
      //console.log(post);
      if ( post.type === 'status') continue;

      var shares = 0;
      if( post.shares ) shares = post.shares.count;

      var likes = 0;
      if( post.likes ) likes = post.likes.count;

      console.log("%s >> %s : share= %d  | like= %d ",post.message, post.type, shares, likes );
      console.log("======================================");
      res.push(post.link);
  }
  console.log(res.result());
};

function Summy(){
  var self = this;
  self.items = [];

  self.push = function(link){

      var pos = -1;
      for( var i = 0; i < self.items.length; i++ ) {
          if( self.items[i].link == link ) {
              pos = i;
              break;
          }
      }

      if( pos != -1 ) {
          self.items[pos].count++;
      }else {
          var item = {
            link: link,
            count: 1
          };
          self.items.push(item);
      }
  }

  self.result = function() {
      return self.items.sort(function(a,b){ return b.count - a.count });
  }
}
