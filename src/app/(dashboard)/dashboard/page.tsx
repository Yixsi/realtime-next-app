import { options } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';

export default async function page() {
	const session = await getServerSession(options);

	return <pre>{JSON.stringify(session)}</pre>;
}
