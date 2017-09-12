import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1503Component } from './my-comp-1503.component';

describe('MyComp1503Component', () => {
  let component: MyComp1503Component;
  let fixture: ComponentFixture<MyComp1503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
