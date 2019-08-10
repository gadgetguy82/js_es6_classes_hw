class PubSub {
  static publish(channel, payload) {
    let event = new CustomEvent(channel, {
      detail: payload
  });
    document.dispatchEvent(event);
  }

  static subscribe(channel, callback) {
    document.addEventListener(channel, callback);
  }
};

export default PubSub;
