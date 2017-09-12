import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7675Component } from './my-comp-7675.component';

describe('MyComp7675Component', () => {
  let component: MyComp7675Component;
  let fixture: ComponentFixture<MyComp7675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
