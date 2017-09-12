import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1401Component } from './my-comp-1401.component';

describe('MyComp1401Component', () => {
  let component: MyComp1401Component;
  let fixture: ComponentFixture<MyComp1401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
