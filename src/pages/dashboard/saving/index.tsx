import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import React from 'react'
import { SavingCard } from '../components/saving-card'

export const Saving = () => {

    const [typeChoice, setTypeChoice] = React.useState("week52")
    const savings = [
        {
            "id": 1,
            "entitled": "52 week challenge start 200",
            "balance": 2000,
            "created_at": new Date()
        },
        {
            "id": 2,
            "entitled": "52 week challenge start 100",
            "balance": 1000,
            "created_at": new Date()
        },
    ]
    return (
        <>
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Mes epargnes</h2>
                <div className="flex items-center space-x-2">
                    {/* <CalendarDateRangePicker /> */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">Ajouter un nouvel epargne</Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Creer un nouvel epargne</SheetTitle>
                                <SheetDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </SheetDescription>
                            </SheetHeader>
                            <form className='my-3'>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="type">Type</Label>
                                        <Select defaultValue={typeChoice} onValueChange={(value) => setTypeChoice(value)}>
                                            <SelectTrigger id="framework">
                                                <SelectValue placeholder="Select type" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="week52">52 weeks</SelectItem>
                                                <SelectItem value="week26">26 weeks</SelectItem>
                                                <SelectItem value="month12">12 months</SelectItem>
                                                <SelectItem value="month6">6 months</SelectItem>
                                                <SelectItem value="perso">Personalise</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Name of your project" />
                                    </div>
                                </div>
                            </form>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button variant="outline">Annuler</Button>
                                </SheetClose>
                                <Button type="submit">Creer l'epargne</Button>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
                {/* <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics" disabled>
                        Analytics
                    </TabsTrigger>
                    <TabsTrigger value="reports" disabled>
                        Reports
                    </TabsTrigger>
                    <TabsTrigger value="notifications" disabled>
                        Notifications
                    </TabsTrigger>
                </TabsList> */}
                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {
                            savings.map(save => {
                                return <SavingCard save={save} />
                            })
                        }
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        {/* <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <Overview />
                            </CardContent>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Recent Transactions</CardTitle>
                                <CardDescription>
                                    You made {transactions.length} transactions this week.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <RecentSales transactions={transactions} />
                            </CardContent>
                        </Card> */}
                    </div>
                </TabsContent>
            </Tabs>
        </>
    )
}
