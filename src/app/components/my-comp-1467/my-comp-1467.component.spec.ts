import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1467Component } from './my-comp-1467.component';

describe('MyComp1467Component', () => {
  let component: MyComp1467Component;
  let fixture: ComponentFixture<MyComp1467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
