/**
 * The only way to change the state is by sending
 * a signal to the store.
 * This signal is an action that is "dispatched"
 *
 * Tutorial progress marker:
 * "keeping the original array:"
 *
 * Redux actions are just JS objects. type/payload
 *
 * Type property drives how the state should change and it's
 * always required by Redux.
 *
 * The payload property instead describes what should change,
 * and might be omitted if you don't have new data.
 *
 * Best practice: wrap every action within a function, so that
 * object creation is abstracted away. That's an action creator
 *
 * tweak the reducer for catching the new action:
 *
 * How does a reducer know when to generate the next state?
 *
 * When an action is dispatched, the store forwards a message
 * (the action object) to the reducer. <<<<<<
 *
 * dispatch >>> store forwards the action to the reducer
 *
 * reducer produces next state, merging action payload
 *
 * Depending on the action type, the reducer produces the next state,
 * merging the action payload into the new state. <<<<<
 *
 * Next, make the reducer check incoming action types.
 *
 */
