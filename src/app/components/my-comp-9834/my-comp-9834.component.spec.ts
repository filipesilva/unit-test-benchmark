import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9834Component } from './my-comp-9834.component';

describe('MyComp9834Component', () => {
  let component: MyComp9834Component;
  let fixture: ComponentFixture<MyComp9834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
