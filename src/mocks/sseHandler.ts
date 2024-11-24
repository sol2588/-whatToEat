import { http, HttpResponse } from 'msw';

export const sseHandler = [
    http.get(`${import.meta.env.VITE_BASE_URL}/notify`, async () => {
        const stream = new ReadableStream({
            start(controller) {
                const encoder = new TextEncoder();

                const sendEvent = (event: any, data: any) => {
                    const message = `${event} : ${data}`;
                    controller.enqueue(encoder.encode(message));
                };

                const intervalId = setInterval(() => {
                    sendEvent('notification', '새 댓글이 달렸습니다.');
                }, 5000);
                console.log(intervalId);

                controller.close();
            },
        });

        return new HttpResponse(stream, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                Conntection: 'keep-alive',
            },
        });
    }),
];
