import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9372Component } from './my-comp-9372.component';

describe('MyComp9372Component', () => {
  let component: MyComp9372Component;
  let fixture: ComponentFixture<MyComp9372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
