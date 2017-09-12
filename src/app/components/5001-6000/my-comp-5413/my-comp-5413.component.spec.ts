import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5413Component } from './my-comp-5413.component';

describe('MyComp5413Component', () => {
  let component: MyComp5413Component;
  let fixture: ComponentFixture<MyComp5413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
