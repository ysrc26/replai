// src/app/page.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle, Zap, Shield, TrendingUp, Bot, Target, Clock, CheckCircle } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <Card className="text-center hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="mx-auto bg-blue-100 text-blue-600 p-3 rounded-lg w-fit mb-2">
        <Icon className="h-6 w-6" />
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-500 text-white p-2 rounded-lg">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Replai</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">התחברות</Button>
            </Link>
            <Link href="/register">
              <Button>הרשמה</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            מענה חכם ללידים
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            הפוך כל פנייה באינסטגרם ובוואטסאפ ללקוח משלם עם תגובות AI 
            מותאמות אישית לעסק שלך
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <Link href="/register">
              <Button size="lg" className="text-lg px-8 py-4">
                התחל ניסיון חינם
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              צפה בדמו
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <FeatureCard
              icon={Bot}
              title="AI חכם"
              description="בינה מלאכותית מתקדמת שלומדת את הסגנון שלך ומתאימה תגובות אישיות"
            />
            <FeatureCard
              icon={Target}
              title="זיהוי קהל יעד"
              description="זיהוי אוטומטי של סוגי לקוחות ותגובות מותאמות לכל קבוצה"
            />
            <FeatureCard
              icon={Clock}
              title="מענה מיידי"
              description="מענה מיידי 24/7 לכל הפניות ללא איחורים או החמצות"
            />
            <FeatureCard
              icon={TrendingUp}
              title="שיפור המרות"
              description="העלה את אחוזי ההמרה שלך עם תגובות מקצועיות ומותאמות"
            />
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              למה לבחור ב-Replai?
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-right">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>התאמה מלאה לסגנון העסק שלך</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>זיהוי אוטומטי של מילות מפתח ונושאים חמים</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>הצעות תגובה חכמות עם אישור מראש</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>אינטגרציה חלקה עם אינסטגרם ווואטסאפ</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>אנליטיקה מתקדמת ודוחות מפורטים</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>תבניות תגובה מותאמות לכל קהל יעד</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>שליטה מלאה - אוטומטי, אישור או הצעה בלבד</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>תמיכה מלאה בעברית וכיוון כתיבה RTL</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              מוכן להתחיל?
            </h3>
            <p className="text-gray-600 mb-6">
              הצטרף אלפי עסקים שכבר משתמשים ב-Replai כדי להגדיל את המכירות
            </p>
            <Link href="/register">
              <Button size="lg" className="text-lg px-8 py-4">
                התחל ניסיון חינם של 14 יום
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>© 2024 Replai. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  )
}