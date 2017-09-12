import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1368Component } from './my-comp-1368.component';

describe('MyComp1368Component', () => {
  let component: MyComp1368Component;
  let fixture: ComponentFixture<MyComp1368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
