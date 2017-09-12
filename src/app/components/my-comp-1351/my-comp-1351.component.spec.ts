import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1351Component } from './my-comp-1351.component';

describe('MyComp1351Component', () => {
  let component: MyComp1351Component;
  let fixture: ComponentFixture<MyComp1351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
