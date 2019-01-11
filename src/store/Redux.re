type state = {hello: bool};

let state: state = {hello: true};

type subscription = {
  key: string,
  callback: state => unit,
};

let subscriptions = ref([]);

let subscribe = (key, callback) => {
  subscriptions := List.append(subscriptions^, [{key, callback}]);

  callback(state);
};

let unsubscribe = removeKey => {
  subscriptions := List.filter(({key}) => removeKey != key, subscriptions^);
};

let dispatch = () => {
  List.iter(({callback}) => callback(state), subscriptions^);
};