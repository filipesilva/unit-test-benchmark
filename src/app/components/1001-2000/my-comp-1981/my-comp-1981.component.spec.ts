import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1981Component } from './my-comp-1981.component';

describe('MyComp1981Component', () => {
  let component: MyComp1981Component;
  let fixture: ComponentFixture<MyComp1981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
