import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

const specificationRepository = SpecificationRepository.getIntance();
const listSpecificationUseCase = new ListSpecificationUseCase(
    specificationRepository
);
const listSpecificationController = new ListSpecificationController(
    listSpecificationUseCase
);

export { listSpecificationController };
