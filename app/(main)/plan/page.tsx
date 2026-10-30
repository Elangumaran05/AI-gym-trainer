import PlanApproval from "@/components/plan/PlanApproval";
import PlanOverview from "@/components/plan/PlanOverview";

export default function PlanPage() {
    return (
        <div className="space-y-6">
            <PlanOverview />
            <PlanApproval />
        </div>
    );
}