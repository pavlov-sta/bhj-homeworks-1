const chatWidgetSideText = document.querySelector('.chat-widget__side-text');
chatWidgetSideText.onclick = function () {
    const chatWidget = document.querySelector('.chat-widget');
    chatWidget.classList.add('chat-widget_active');
};

const chatWidgetInput = document.getElementById('chat-widget__input');
chatWidgetInput.onkeypress = function (e) {
    if (e.which == 13) {
        const timme = new Date();
        const messageCustomer = chatWidgetInput.value;
        const messageRobot = [
            'Кто тут?',
            'Где ваша совесть?',
            'К сожалению  все операторы сейчас заняты! Не пишите нам больше!',
            'Вы не купили не одного товара, что б так с нами разговаривать!',
            'Добрый день! До свидания!',
            'Мы нечего не будем вам продавать!',
            'Где ваша совесть?',
        ],
            index = Math.floor(Math.random() * messageRobot.length);
        if (messageCustomer != '') {
            const messages = document.querySelector('.chat-widget__messages');
            messages.innerHTML += `
                    <div class="message message_client">
                        <div class="message__time">${timme.getHours()}:${timme.getMinutes()}</div>
                        <div class="message__text">${messageCustomer}</div>
                    </div>
                    <div class="message">
                            <div class="message__time">${timme.getHours()}:${timme.getMinutes()}</div>
                            <div class="message__text">${messageRobot[index]}</div>
                    </div>`;
        }
        chatWidgetInput.value = '';
    }
}