/**
 * Created by kevin on 10/27/14.
 */
app.registerPresenter(function (container) {
    var EventBus = container.getService('services/EventBus');

    function TomatoPresenter($eventBus) {
        this.eventBus = $eventBus;
    }

    TomatoPresenter.prototype.show = function (view) {
        this.eventBus.subscribe({channel: "TomatoView", topic: "updateTomato", callback: view.setStatus.bind(view) });
        view.event.onClickTomato = function () {
           view.setStatus(undefined);
        }.bind(this);
    };

    TomatoPresenter.newInstance = function ($eventBus) {
        var eventBus = $eventBus || EventBus.getInstance();
        return Some(new TomatoPresenter(eventBus));
    };

    return TomatoPresenter;
});