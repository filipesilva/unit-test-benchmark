import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9899Component } from './my-comp-9899.component';

describe('MyComp9899Component', () => {
  let component: MyComp9899Component;
  let fixture: ComponentFixture<MyComp9899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
