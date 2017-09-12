import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1746Component } from './my-comp-1746.component';

describe('MyComp1746Component', () => {
  let component: MyComp1746Component;
  let fixture: ComponentFixture<MyComp1746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
