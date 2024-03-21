import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardCssGridComponent } from './dashboard-css-grid.component';

describe('DashboardCssGridComponent', () => {
  let component: DashboardCssGridComponent;
  let fixture: ComponentFixture<DashboardCssGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardCssGridComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCssGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
