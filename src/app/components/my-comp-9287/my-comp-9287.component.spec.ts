import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9287Component } from './my-comp-9287.component';

describe('MyComp9287Component', () => {
  let component: MyComp9287Component;
  let fixture: ComponentFixture<MyComp9287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
