import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1568Component } from './my-comp-1568.component';

describe('MyComp1568Component', () => {
  let component: MyComp1568Component;
  let fixture: ComponentFixture<MyComp1568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
