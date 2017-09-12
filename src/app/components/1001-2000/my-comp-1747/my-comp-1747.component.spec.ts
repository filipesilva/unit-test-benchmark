import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1747Component } from './my-comp-1747.component';

describe('MyComp1747Component', () => {
  let component: MyComp1747Component;
  let fixture: ComponentFixture<MyComp1747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
