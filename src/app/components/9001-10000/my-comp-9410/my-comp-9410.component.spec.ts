import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9410Component } from './my-comp-9410.component';

describe('MyComp9410Component', () => {
  let component: MyComp9410Component;
  let fixture: ComponentFixture<MyComp9410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
