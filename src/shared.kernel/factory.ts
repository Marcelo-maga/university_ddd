import {
  AlunoController,
  DisciplinaController,
} from "../application/controllers";
import {
  CriarDisciplina,
  AtribuirDisciplina,
  ObterDisciplina,
  ListarDisciplinas,
  EditarDisciplina,
  DeletarDisciplina,
} from "../secretary/domain";
import {
  CriarAluno,
  DeletarAluno,
  EditarAluno,
  ListarAlunos,
  ObterAluno,
} from "../secretary/domain/useCases/aluno";
import {
  AlunoRepository,
  DisciplinaRepository,
} from "../secretary/infrastructure/repositories";

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
  static createObterDisciplina() {
    return new ObterDisciplina(RepositoryFactory.createDisciplinaRepository());
  }
  static createListarDisciplinas() {
    return new ListarDisciplinas(
      RepositoryFactory.createDisciplinaRepository()
    );
  }
  static createEditarDisciplina() {
    return new EditarDisciplina(RepositoryFactory.createDisciplinaRepository());
  }
  static createDeletarDisciplina() {
    return new DeletarDisciplina(
      RepositoryFactory.createDisciplinaRepository()
    );
  }

  static createCriarAluno() {
    return new CriarAluno(RepositoryFactory.createAlunoRepository());
  }

  static createObterAluno() {
    return new ObterAluno(RepositoryFactory.createAlunoRepository());
  }

  static createListarAlunos() {
    return new ListarAlunos(RepositoryFactory.createAlunoRepository());
  }

  static createEditarAluno() {
    return new EditarAluno(RepositoryFactory.createAlunoRepository());
  }

  static createDeletarAluno() {
    return new DeletarAluno(RepositoryFactory.createAlunoRepository());
  }
}
