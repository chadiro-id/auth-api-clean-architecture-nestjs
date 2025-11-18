import { IdGenerationProvider } from '../providers/id-generation.provider';
import { PasswordHashProvider } from '../providers/password-hash.provider';
import { AccountService } from '../services/account.service';
import { SignUpDto } from './dto/sign-up.dto';

export class SignUpUseCase {
  constructor(
    private readonly accountService: AccountService,
    private readonly passwordHasProvider: PasswordHashProvider,
    private readonly idGenerationProvider: IdGenerationProvider,
  ) {}

  async execute(dto: SignUpDto) {
    const exists = await this.accountService.existsByEmail(dto.email);
    if (exists) {
      throw new Error('Already exists');
    }

    const hashedPassword = await this.passwordHasProvider.hashPassword(
      dto.password,
    );
    const id = this.idGenerationProvider.generate(21);

    await this.accountService.createWithEmail(id, dto.email, hashedPassword);
  }
}
