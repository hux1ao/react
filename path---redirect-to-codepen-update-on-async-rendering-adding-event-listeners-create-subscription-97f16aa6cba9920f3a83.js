webpackJsonp([0x635145e9dc4c],{963:function(e,n){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"import {createSubscription} from \'create-subscription\';\\n\\nconst Subscription = createSubscription({\\n  getCurrentValue(sourceProp) {\\n    // Return the current value of the subscription (sourceProp).\\n    return sourceProp.value;\\n  },\\n\\n  subscribe(sourceProp, callback) {\\n    function handleSubscriptionChange() {\\n      callback(sourceProp.value);\\n    }\\n\\n    // Subscribe (e.g. add an event listener) to the subscription (sourceProp).\\n    // Call callback(newValue) whenever a subscription changes.\\n    sourceProp.subscribe(handleSubscriptionChange);\\n\\n    // Return an unsubscribe method.\\n    return function unsubscribe() {\\n      sourceProp.unsubscribe(handleSubscriptionChange);\\n    };\\n  },\\n});\\n\\n// Rather than passing the subscribable source to our ExampleComponent,\\n// We could just pass the subscribed value directly:\\n<Subscription source={dataSource}>\\n  {value => <ExampleComponent subscribedValue={value} />}\\n</Subscription>;\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-update-on-async-rendering-adding-event-listeners-create-subscription-97f16aa6cba9920f3a83.js.map