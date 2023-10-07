import {
  AlunoController,
  DisciplinaController,
} from "../application/controllers";
import {
  AlunoRepository,
  DisciplinaRepository,
} from "../infrastructure/repositories";
import {
  AtribuirDisciplina,
  CriarDisciplina,
} from "../domains/secretary/useCases/disciplina";

export class ControllerFactory {
  static createAlunoController() {
    return new AlunoController();
  }
  static createDisciplinaController() {
    return new DisciplinaController();
  }
}

export class RepositoryFactory {
  static createAlunoRepository() {
    return new AlunoRepository();
  }
  static createDisciplinaRepository() {
    return new DisciplinaRepository();
  }
}

export class UseCasesFactory {
  static createCriarDisciplina() {
    return new CriarDisciplina(RepositoryFactory.createDisciplinaRepository());
  }
  static createAtribuirDisciplina() {
    return new AtribuirDisciplina(
      RepositoryFactory.createAlunoRepository(),
      RepositoryFactory.createDisciplinaRepository()
    );
  }
}
