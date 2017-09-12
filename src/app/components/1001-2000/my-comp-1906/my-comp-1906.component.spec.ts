import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1906Component } from './my-comp-1906.component';

describe('MyComp1906Component', () => {
  let component: MyComp1906Component;
  let fixture: ComponentFixture<MyComp1906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
