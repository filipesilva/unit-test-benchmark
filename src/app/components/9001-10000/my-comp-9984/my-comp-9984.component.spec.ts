import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9984Component } from './my-comp-9984.component';

describe('MyComp9984Component', () => {
  let component: MyComp9984Component;
  let fixture: ComponentFixture<MyComp9984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
