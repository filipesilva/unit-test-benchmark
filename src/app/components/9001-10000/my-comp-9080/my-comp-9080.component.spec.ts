import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9080Component } from './my-comp-9080.component';

describe('MyComp9080Component', () => {
  let component: MyComp9080Component;
  let fixture: ComponentFixture<MyComp9080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
