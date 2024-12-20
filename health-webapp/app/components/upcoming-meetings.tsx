import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const meetings = [
  { id: 1, title: "Team Standup", time: "10:00 AM", attendees: 5 },
  { id: 2, title: "Client Presentation", time: "2:00 PM", attendees: 3 },
  { id: 3, title: "Project Review", time: "4:30 PM", attendees: 4 },
]

export function UpcomingMeetings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Meetings</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {meetings.map((meeting) => (
            <li key={meeting.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{meeting.title}</p>
                <p className="text-sm text-gray-500">{meeting.time}</p>
              </div>
              <span className="text-sm text-gray-500">{meeting.attendees} attendees</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

