import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1999Component } from './my-comp-1999.component';

describe('MyComp1999Component', () => {
  let component: MyComp1999Component;
  let fixture: ComponentFixture<MyComp1999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
