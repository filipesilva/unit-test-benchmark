import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9715Component } from './my-comp-9715.component';

describe('MyComp9715Component', () => {
  let component: MyComp9715Component;
  let fixture: ComponentFixture<MyComp9715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
