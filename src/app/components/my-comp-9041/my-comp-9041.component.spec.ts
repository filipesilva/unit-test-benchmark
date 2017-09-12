import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9041Component } from './my-comp-9041.component';

describe('MyComp9041Component', () => {
  let component: MyComp9041Component;
  let fixture: ComponentFixture<MyComp9041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
