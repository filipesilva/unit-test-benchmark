import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1105Component } from './my-comp-1105.component';

describe('MyComp1105Component', () => {
  let component: MyComp1105Component;
  let fixture: ComponentFixture<MyComp1105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
