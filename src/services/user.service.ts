import { IUser } from '@/types/user.types';

import { network } from '@/api/network';

export interface IProfileResponse {
	user: IUser;
	stats: Record<string, number>;
}

class UserService {
	private BASE_URL = '/users/';

	async getProfile(id: string) {
		const response = await network.get<IProfileResponse>(
			`${this.BASE_URL}${id}`
		);
		return response.data;
	}
}

export const userService = new UserService();
