import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1445Component } from './my-comp-1445.component';

describe('MyComp1445Component', () => {
  let component: MyComp1445Component;
  let fixture: ComponentFixture<MyComp1445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
