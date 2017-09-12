import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5518Component } from './my-comp-5518.component';

describe('MyComp5518Component', () => {
  let component: MyComp5518Component;
  let fixture: ComponentFixture<MyComp5518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
