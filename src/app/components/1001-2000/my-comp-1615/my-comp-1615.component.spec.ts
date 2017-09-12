import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1615Component } from './my-comp-1615.component';

describe('MyComp1615Component', () => {
  let component: MyComp1615Component;
  let fixture: ComponentFixture<MyComp1615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
