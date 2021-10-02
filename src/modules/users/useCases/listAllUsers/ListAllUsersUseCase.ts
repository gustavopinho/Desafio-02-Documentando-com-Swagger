import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (user === undefined) {
      throw new Error("Usuário não encontrado");
    }

    if (!user.admin) {
      throw new Error(
        "Você não tem permissão para listar os usuários cadatrados"
      );
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
