import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1450Component } from './my-comp-1450.component';

describe('MyComp1450Component', () => {
  let component: MyComp1450Component;
  let fixture: ComponentFixture<MyComp1450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
