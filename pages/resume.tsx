import { Navbar } from "@/components/navbar";
import DefaultLayout from "@/layouts/default";


export default function resumePage() {
	return (
		<DefaultLayout>
			<object data="/David_Sawires_Resume.pdf" type="application/pdf" style={{height : "100%", width : "100%"}}>
			</object>
		</DefaultLayout>
	);
}
