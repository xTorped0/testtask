import { userService } from '@/services/user.service';

type TypeUserPage = {
	params: {
		userId: string;
	};
};

async function getData(id: string) {
	// getting user data from the server
	const userData = await userService.getProfile(id);

	return userData;
}

export const revalidate = 3600; // revalidate at most every hour

export default async function UserPage({ params }: TypeUserPage) {
	const { userId } = params;
	const data = await getData(userId);

	console.log(data);

	return <div>UserID: {userId}</div>;
}
