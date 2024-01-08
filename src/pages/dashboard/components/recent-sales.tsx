import { formatAmount } from "@/lib/utils"

type transactionType = {
    amount: number
    date: string
    entitled: string
}
export function RecentSales({ transactions }: { transactions: transactionType[] }) {


    return (
        <div className="space-y-8">
            {
                transactions.map((transaction) => {
                    return <div className="flex items-center">

                        {/* <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar> */}

                        <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">{transaction.entitled}</p>
                            <p className="text-sm text-muted-foreground">
                                {transaction.date}
                            </p>
                        </div>
                        <div className="ml-auto font-medium">{formatAmount(transaction.amount)}</div>
                    </div>
                })
            }

        </div>
    )
}