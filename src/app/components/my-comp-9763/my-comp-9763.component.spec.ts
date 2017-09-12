import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9763Component } from './my-comp-9763.component';

describe('MyComp9763Component', () => {
  let component: MyComp9763Component;
  let fixture: ComponentFixture<MyComp9763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
