webpackJsonp([25147094229633],{923:function(n,e){n.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"function formatDate(date) {\\n  return date.toLocaleDateString();\\n}\\n\\nfunction Avatar(props) {\\n  return (\\n    <img\\n      className=\\"Avatar\\"\\n      src={props.user.avatarUrl}\\n      alt={props.user.name}\\n    />\\n  );\\n}\\n\\nfunction UserInfo(props) {\\n  return (\\n    <div className=\\"UserInfo\\">\\n      <Avatar user={props.user} />\\n      <div className=\\"UserInfo-name\\">{props.user.name}</div>\\n    </div>\\n  );\\n}\\n\\nfunction Comment(props) {\\n  return (\\n    <div className=\\"Comment\\">\\n      <UserInfo user={props.author} />\\n      <div className=\\"Comment-text\\">{props.text}</div>\\n      <div className=\\"Comment-date\\">\\n        {formatDate(props.date)}\\n      </div>\\n    </div>\\n  );\\n}\\n\\nconst comment = {\\n  date: new Date(),\\n  text: \'I hope you enjoy learning React!\',\\n  author: {\\n    name: \'Hello Kitty\',\\n    avatarUrl: \'http://placekitten.com/g/64/64\',\\n  },\\n};\\nReactDOM.render(\\n  <Comment\\n    date={comment.date}\\n    text={comment.text}\\n    author={comment.author}\\n  />,\\n  document.getElementById(\'root\')\\n);\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-components-and-props-extracting-components-continued-187c6fd73e651368fe5b.js.map