import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9701Component } from './my-comp-9701.component';

describe('MyComp9701Component', () => {
  let component: MyComp9701Component;
  let fixture: ComponentFixture<MyComp9701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
