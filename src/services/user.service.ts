import { IRepos, IUser } from '@/types/user.types';

import { network } from '@/api/network';

class UserService {
	private BASE_URL = '/users/';

	async getProfile(id: string) {
		const response = await network.get<IUser>(`${this.BASE_URL}${id}`);
		return response.data;
	}

	async getRepositories(id: string, per_page: number | null = 10) {
		const response = await network.get<IRepos>(`${this.BASE_URL}${id}/repos`, {
			params: {
				per_page,
				sort: 'updated',
				direction: 'desc'
			}
		});
		return response.data;
	}

	async getLanguageStats(id: string) {
		const repos = await this.getRepositories(id, null);

		const languages = await Promise.all(
			repos.map((repo: any) =>
				network.get(repo.languages_url).then(response => response.data)
			)
		);

		return languages;
	}
}

export const userService = new UserService();
