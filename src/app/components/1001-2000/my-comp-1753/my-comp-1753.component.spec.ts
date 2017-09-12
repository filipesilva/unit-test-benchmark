import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1753Component } from './my-comp-1753.component';

describe('MyComp1753Component', () => {
  let component: MyComp1753Component;
  let fixture: ComponentFixture<MyComp1753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
