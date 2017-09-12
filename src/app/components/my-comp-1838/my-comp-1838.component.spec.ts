import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1838Component } from './my-comp-1838.component';

describe('MyComp1838Component', () => {
  let component: MyComp1838Component;
  let fixture: ComponentFixture<MyComp1838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
