import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1581Component } from './my-comp-1581.component';

describe('MyComp1581Component', () => {
  let component: MyComp1581Component;
  let fixture: ComponentFixture<MyComp1581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
