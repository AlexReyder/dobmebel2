import { AlertCircle } from "lucide-react"
 
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@/shared/ui/alert"

export const NotSuperAdminTemplate = () => {
	return(
	 <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Ошибка</AlertTitle>
      <AlertDescription>
       Нет доступа.
      </AlertDescription>
    </Alert>
	)
}