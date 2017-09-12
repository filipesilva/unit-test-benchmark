import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1716Component } from './my-comp-1716.component';

describe('MyComp1716Component', () => {
  let component: MyComp1716Component;
  let fixture: ComponentFixture<MyComp1716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
