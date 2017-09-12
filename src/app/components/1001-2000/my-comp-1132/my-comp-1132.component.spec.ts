import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1132Component } from './my-comp-1132.component';

describe('MyComp1132Component', () => {
  let component: MyComp1132Component;
  let fixture: ComponentFixture<MyComp1132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
