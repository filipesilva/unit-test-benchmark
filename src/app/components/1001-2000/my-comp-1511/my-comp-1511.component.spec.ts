import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1511Component } from './my-comp-1511.component';

describe('MyComp1511Component', () => {
  let component: MyComp1511Component;
  let fixture: ComponentFixture<MyComp1511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
