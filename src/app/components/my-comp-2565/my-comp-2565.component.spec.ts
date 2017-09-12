import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2565Component } from './my-comp-2565.component';

describe('MyComp2565Component', () => {
  let component: MyComp2565Component;
  let fixture: ComponentFixture<MyComp2565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
