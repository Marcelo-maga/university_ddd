import {
  AlunoController,
  DisciplinaController,
} from "../application/controllers";
import {
  ContaController,
  ProdutoController,
  PagamentoController,
} from "../application/controllers";
import { MatriculaController } from "../application/controllers/MatriculaController";

import { ContaRepository } from "../canteen/infrastructure/repositories/ContaRepository";
import { PagamentoRepository } from "../canteen/infrastructure/repositories/PagamentoRepository";
import { ProdutoRepository } from "../canteen/infrastructure/repositories/ProdutoRepository";
import {
  AtribuirDisciplinaUseCase,
  CriarAlunoUseCase,
  CriarDisciplinaUseCase,
  DeletarAlunoUseCase,
  DeletarDisciplinaUseCase,
  EditarAlunoUseCase,
  EditarDisciplinaUseCase,
  FazerMatriculaUseCase,
  ListarAlunosUseCase,
  ListarDisciplinasUseCase,
  ObterAlunoUseCase,
  ObterDisciplinaUserCase,
  TrancarMatriculaUseCase,
} from "../secretary/domain";

import {
  AdicionaProdutoItemContaUseCase,
  CreateContaUseCase,
  DeleteContaUseCase,
  CreateProdutoUseCase,
  DeleteProdutoUseCase,
  FecharPagamentoUseCase,
  GetAllProdutoUseCase,
  GetProdutoUseCase,
  UpdateProdutoUseCase,
} from "../canteen/domain/";

import {
  AlunoRepository,
  DisciplinaRepository,
} from "../secretary/infrastructure/repositories";
import { MatriculaRepository } from "../secretary/infrastructure/repositories/MatriculaRepository";

export class ControllerFactory {
  static createAlunoController() {
    return new AlunoController();
  }
  static createDisciplinaController() {
    return new DisciplinaController();
  }
  static createMatriculaController() {
    return new MatriculaController();
  }
  static createContaController() {
    return new ContaController();
  }
  static createProdutoController() {
    return new ProdutoController();
  }
  static createPagamentoController() {
    return new PagamentoController();
  }
}

export class RepositoryFactory {
  static createAlunoRepository() {
    return new AlunoRepository();
  }
  static createDisciplinaRepository() {
    return new DisciplinaRepository();
  }
  static createMatriculaRepository() {
    return new MatriculaRepository();
  }
  static createContaRepository() {
    return new ContaRepository();
  }
  static createProdutoRepository() {
    return new ProdutoRepository();
  }
  static createPagamentoRepository() {
    return new PagamentoRepository();
  }
}

export class UseCasesFactory {
  static createCriarDisciplinaUseCase() {
    return new CriarDisciplinaUseCase(
      RepositoryFactory.createDisciplinaRepository()
    );
  }
  static createAtribuirDisciplinaUseCase() {
    return new AtribuirDisciplinaUseCase(
      RepositoryFactory.createAlunoRepository(),
      RepositoryFactory.createDisciplinaRepository()
    );
  }
  static createObterDisciplinaUseCase() {
    return new ObterDisciplinaUserCase(
      RepositoryFactory.createDisciplinaRepository()
    );
  }
  static createListarDisciplinasUseCase() {
    return new ListarDisciplinasUseCase(
      RepositoryFactory.createDisciplinaRepository()
    );
  }
  static createEditarDisciplinaUseCase() {
    return new EditarDisciplinaUseCase(
      RepositoryFactory.createDisciplinaRepository()
    );
  }
  static createDeletarDisciplinaUseCase() {
    return new DeletarDisciplinaUseCase(
      RepositoryFactory.createDisciplinaRepository()
    );
  }

  static createCriarAlunoUseCase() {
    return new CriarAlunoUseCase(RepositoryFactory.createAlunoRepository());
  }

  static createObterAlunoUseCase() {
    return new ObterAlunoUseCase(RepositoryFactory.createAlunoRepository());
  }

  static createListarAlunosUseCase() {
    return new ListarAlunosUseCase(RepositoryFactory.createAlunoRepository());
  }

  static createEditarAlunoUseCase() {
    return new EditarAlunoUseCase(RepositoryFactory.createAlunoRepository());
  }

  static createDeletarAlunoUseCase() {
    return new DeletarAlunoUseCase(RepositoryFactory.createAlunoRepository());
  }

  static createFazerMatriculaUseCase() {
    return new FazerMatriculaUseCase(
      RepositoryFactory.createMatriculaRepository()
    );
  }

  static createTrancarMatriculaUseCase() {
    return new TrancarMatriculaUseCase(
      RepositoryFactory.createMatriculaRepository()
    );
  }

  static createAdicionarProdutoItemContaUseCase() {
    return new AdicionaProdutoItemContaUseCase(
      RepositoryFactory.createProdutoRepository(),
      RepositoryFactory.createContaRepository()
    );
  }

  static createCreateContaUseCase() {
    return new CreateContaUseCase(
      RepositoryFactory.createAlunoRepository(),
      RepositoryFactory.createContaRepository()
    );
  }

  static createDeletaContaUseCase() {
    return new DeleteContaUseCase(RepositoryFactory.createContaRepository());
  }

  static createFecharPagamentoUseCase() {
    return new FecharPagamentoUseCase(
      RepositoryFactory.createContaRepository(),
      RepositoryFactory.createPagamentoRepository()
    );
  }

  static createCreateProdutoUseCase() {
    return new CreateProdutoUseCase(
      RepositoryFactory.createProdutoRepository()
    );
  }

  static createDeleteProdutoUseCase() {
    return new DeleteProdutoUseCase(
      RepositoryFactory.createProdutoRepository()
    );
  }

  static createGetAllProdutoUseCase() {
    return new GetAllProdutoUseCase(
      RepositoryFactory.createProdutoRepository()
    );
  }

  static createGetProdutoUseCase() {
    return new GetProdutoUseCase(RepositoryFactory.createProdutoRepository());
  }

  static createUpdateProdutoUseCase() {
    return new UpdateProdutoUseCase(
      RepositoryFactory.createProdutoRepository()
    );
  }

  
}
