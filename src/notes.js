/**
 * The only way to change the state is by sending
 * a signal to the store.
 * This signal is an action that is "dispatched"
 *
 * Tutorial progress marker:
 * "What is Redux middleware?"
 *
 * Redux actions are just JS objects. type/payload
 *      payload is the new values
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
 * react-redux: connect method
 *
 * connect(mapStateToProps, mapDispatchToProps)
 *
 * mapStateToProps connects part of Redux state to component props
 *
 * mapDispatchToProps connects Redux actions to component props
 *
 * React also needs Provider, a higher order react-redux component.
 *
 * getState: access current state
 * dispatch: send action to update state
 * subscribe: listen for state changes
 *
 * <Provider store={store}> <<< from react-redux
 *
 * Form component: local state for inputs
 * It receives a Redux action. This way it can
 * update global state by dispatching AddArticle.
 *
 * mapDispatchToProps connects Redux actions to React props
 *
 * The first argument for connect must be null when mapStateToProps
 * is absent, or you'll get a TypeError: dispatch is not a function.
 */
