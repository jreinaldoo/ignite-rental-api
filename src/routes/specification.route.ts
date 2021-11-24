import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationController } from "../modules/cars/useCases/listSpecifications";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

specificationRoutes.get("/", (request, response) => {
    console.log("teste");
    return listSpecificationController.handle(request, response);
});

export { specificationRoutes };
