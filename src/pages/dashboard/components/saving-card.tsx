import { formatAmount } from '@/lib/utils'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { EyeOffIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export const SavingCard = ({ save }) => {

    const [showAmount, setShowAmount] = React.useState(false)
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {save.entitled}
                </CardTitle>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                </svg>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{showAmount ?
                    <span className="flex items-center justify-between">
                        {
                            formatAmount(save.balance)
                        }
                        <EyeOffIcon size={20} onClick={() => setShowAmount(false)} cursor="pointer" />
                    </span> : <Button onClick={() => setShowAmount(true)}>Show Amount</Button>}</div>
                <br />
                <Badge variant="outline">{save.created_at.toLocaleDateString()}</Badge>
            </CardContent>
        </Card>
    )
}
