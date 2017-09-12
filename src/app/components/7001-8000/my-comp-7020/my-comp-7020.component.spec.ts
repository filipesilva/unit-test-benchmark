import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7020Component } from './my-comp-7020.component';

describe('MyComp7020Component', () => {
  let component: MyComp7020Component;
  let fixture: ComponentFixture<MyComp7020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
