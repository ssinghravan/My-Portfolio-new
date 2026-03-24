import dotenv from 'dotenv';
dotenv.config();

import app from './app.ts';
import { serve } from '@hono/node-server';

let server: any;

console.log('Starting');
async function main() {
    try {
        // await prisma.$connect();
        console.log('Skipping Prisma connect for local run');
    } catch (error) {
        console.error('Failed to start backend:', error);
        process.exit(1);
    }

    server = serve({
        fetch: app.fetch,
        port: (process.env.PORT || 9000) as number
    }, (info) => {
        console.log(`Server is running on http://localhost:${info.port}`);
    });

    const exitHandler = () => {
        if (server) {
            server.close(() => {
                process.exit(1);
            });
        } else {
            process.exit(1);
        }
    };

    const unexpectedErrorHandler = () => {
        exitHandler();
    };

    process.on('uncaughtException', unexpectedErrorHandler);
    process.on('unhandledRejection', unexpectedErrorHandler);

    process.on('SIGTERM', () => {
        if (server) {
            server.close();
        }
    });
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
