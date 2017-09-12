import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1066Component } from './my-comp-1066.component';

describe('MyComp1066Component', () => {
  let component: MyComp1066Component;
  let fixture: ComponentFixture<MyComp1066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
