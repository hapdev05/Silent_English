import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ScoreDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  scores: {
    partName: string;
    count: number;
    maxCount: number;
    score: number;
    maxScore: number;
    description: string;
  }[];
}

const calculateScore = (count: number, maxScore: number) => {
  return (count * maxScore).toFixed(2);
};

export function ScoreDialog({ open, onOpenChange, scores }: ScoreDialogProps) {
  const totalScore = scores.reduce((acc, curr) => acc + curr.score, 0);
  const totalMaxScore = scores.reduce((acc, curr) => acc + curr.maxScore, 0);

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl text-center mb-4">Bảng điểm</AlertDialogTitle>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 text-lg">
              {scores.map((score, index) => (
                <div key={index} className="border-b pb-2">
                  <div className="font-semibold mb-2">
                    {score.description}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>Số câu đúng: {score.count}/{score.maxCount}</div>
                    <div>Điểm: {score.score}/{score.maxScore}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <div>Tổng điểm:</div>
                <div>{totalScore}/{totalMaxScore} điểm</div>
              </div>
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => onOpenChange(false)}>Đóng</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
