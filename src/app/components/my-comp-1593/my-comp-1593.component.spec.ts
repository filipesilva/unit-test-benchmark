import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1593Component } from './my-comp-1593.component';

describe('MyComp1593Component', () => {
  let component: MyComp1593Component;
  let fixture: ComponentFixture<MyComp1593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
