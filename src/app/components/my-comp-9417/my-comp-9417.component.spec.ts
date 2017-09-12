import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9417Component } from './my-comp-9417.component';

describe('MyComp9417Component', () => {
  let component: MyComp9417Component;
  let fixture: ComponentFixture<MyComp9417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
