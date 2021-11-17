import { Specification } from "../../model/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];

    private static INSTANCE: SpecificationRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getIntance(): SpecificationRepository {
        if (!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }
        return SpecificationRepository.INSTANCE;
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find((c) => c.name === name);
        return specification;
    }

    listAll(): Specification[] {
        return this.specifications;
    }
}

export { SpecificationRepository };
