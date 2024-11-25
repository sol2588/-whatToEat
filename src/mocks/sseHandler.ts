import { http, HttpResponse } from 'msw';

export const sseHandler = [
    http.get(`${import.meta.env.VITE_BASE_URL}/notify`, async ({ request }) => {
        const token = request.headers.get('access-token');
        if (!token) {
            return HttpResponse.json({
                code: 'Bad Request',
                message: 'Unauthorized',
            });
        }
        const stream = new ReadableStream({
            start(controller) {
                const encoder = new TextEncoder();

                const sendEvent = (event: any, data: any) => {
                    const message = `${event} : ${data}`;
                    controller.enqueue(encoder.encode(message));
                };

                const intervalId = setInterval(() => {
                    sendEvent(
                        'notification',
                        JSON.stringify({
                            recipeName: '오트밀',
                            message: '새로운 메시지가 등록되었습니다. ',
                            rating: 5,
                            commentUser: 'NEW',
                            recipeId: 1,
                        }),
                    );
                }, 5000);

                request.signal.addEventListener('abort', () => {
                    console.log('Connection aborted');
                    clearInterval(intervalId);
                    controller.close();
                });
            },
        });

        return new HttpResponse(stream, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                Connection: 'keep-alive',
            },
        });
    }),
];
