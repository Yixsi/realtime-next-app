import Button from '@/components/ui/Button';
import { db } from '@/lib/db';

export default async function Home() {
	await db.set('hello', 'hi');
	return <Button>Click</Button>;
}
