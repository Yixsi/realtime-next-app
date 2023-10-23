import { options } from '@/lib/authOptions';
import { validateEmail } from '@/lib/validations/validate-email';
import { getServerSession } from 'next-auth';

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const url = process.env.UPSTASH_REDIS_REST_URL;
		const token = process.env.UPSTASH_REDIS_REST_TOKEN;

		const { email: emailToAdd } = validateEmail.parse(body.email);
		const response = await fetch(`${url}/get/user:email:${emailToAdd}`, {
			headers: {
				Authorization: `Bearer ${token}`
			},
			cache: 'no-store'
		});

		const data = (await response.json()) as { result: string | null };

		const idToAdd = data.result;
		if (!idToAdd) return new Response('User does not exist', { status: 400 });

		const session = await getServerSession(options);
		if (!session) return new Response('Unauthorized', { status: 401 });

		if (idToAdd === session.user.id)
			return new Response("You can't add yourself as a friend", {
				status: 400
			});
		console.log(data);
	} catch (e) {}
}
