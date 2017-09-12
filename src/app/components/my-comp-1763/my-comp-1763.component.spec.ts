import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1763Component } from './my-comp-1763.component';

describe('MyComp1763Component', () => {
  let component: MyComp1763Component;
  let fixture: ComponentFixture<MyComp1763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
