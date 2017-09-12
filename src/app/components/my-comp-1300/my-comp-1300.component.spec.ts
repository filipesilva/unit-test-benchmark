import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1300Component } from './my-comp-1300.component';

describe('MyComp1300Component', () => {
  let component: MyComp1300Component;
  let fixture: ComponentFixture<MyComp1300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
