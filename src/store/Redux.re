let currentState = ref(State.state);

type subscription = {
  key: string,
  callback: State.state => unit,
};

let subscriptions = ref([]);

let unsubscribe = removeKey => {
  subscriptions := List.filter(({key}) => removeKey != key, subscriptions^);
};

let subscribe = (key, callback) => {
  subscriptions := List.append(subscriptions^, [{key, callback}]);

  () => unsubscribe(key);
};

let dispatch = actionType => {
  List.iter(
    reducer => currentState := reducer(currentState^, actionType),
    Reducers.reducers,
  );

  Js.Console.log(currentState^);

  List.iter(({callback}) => callback(currentState^), subscriptions^);
};

let getState = () => currentState^;