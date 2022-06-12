from rest_framework.routers import DefaultRouter
from api.views import AssignmentViewSet

router = DefaultRouter()
router.register(r'', AssignmentViewSet, base_name='users')
urlpatterns = router.urls
