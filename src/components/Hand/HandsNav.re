module Styles = {
  open Css;

  let container = style([display(flexBox)]);

  let button = style([flex(1)]);
};

let component = ReasonReact.statelessComponent("HandsNav");

let make = _children => {
  ...component,
  render: _self =>
    <div className=Styles.container>
      <Button
        text="Charlie"
        action={_event => Js.Console.log("Charlie")}
        styles=Styles.button
      />
      <Button
        text="Viki"
        action={_event => Js.Console.log("Viki")}
        styles=Styles.button
      />
      <Button
        text="Rob"
        action={_event => Js.Console.log("Rob")}
        styles=Styles.button
      />
      <Button
        text="Matt"
        action={_event => Js.Console.log("Matt")}
        styles=Styles.button
      />
    </div>,
};