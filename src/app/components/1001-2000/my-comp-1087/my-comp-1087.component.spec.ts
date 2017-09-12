import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1087Component } from './my-comp-1087.component';

describe('MyComp1087Component', () => {
  let component: MyComp1087Component;
  let fixture: ComponentFixture<MyComp1087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
