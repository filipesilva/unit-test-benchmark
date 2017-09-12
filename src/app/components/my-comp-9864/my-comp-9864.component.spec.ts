import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9864Component } from './my-comp-9864.component';

describe('MyComp9864Component', () => {
  let component: MyComp9864Component;
  let fixture: ComponentFixture<MyComp9864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
