import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string
  fieldName: string
  fieldValue: string
  validate (): string {
    return this.errorMessage
  }
}
