import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9530Component } from './my-comp-9530.component';

describe('MyComp9530Component', () => {
  let component: MyComp9530Component;
  let fixture: ComponentFixture<MyComp9530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
