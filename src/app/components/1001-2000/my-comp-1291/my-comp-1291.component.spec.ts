import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1291Component } from './my-comp-1291.component';

describe('MyComp1291Component', () => {
  let component: MyComp1291Component;
  let fixture: ComponentFixture<MyComp1291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
