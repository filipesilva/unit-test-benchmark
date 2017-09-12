import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9038Component } from './my-comp-9038.component';

describe('MyComp9038Component', () => {
  let component: MyComp9038Component;
  let fixture: ComponentFixture<MyComp9038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
