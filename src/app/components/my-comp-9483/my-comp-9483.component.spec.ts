import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9483Component } from './my-comp-9483.component';

describe('MyComp9483Component', () => {
  let component: MyComp9483Component;
  let fixture: ComponentFixture<MyComp9483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
