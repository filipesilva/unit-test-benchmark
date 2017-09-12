import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1251Component } from './my-comp-1251.component';

describe('MyComp1251Component', () => {
  let component: MyComp1251Component;
  let fixture: ComponentFixture<MyComp1251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
