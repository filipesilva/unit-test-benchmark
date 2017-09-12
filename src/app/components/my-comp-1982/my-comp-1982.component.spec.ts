import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1982Component } from './my-comp-1982.component';

describe('MyComp1982Component', () => {
  let component: MyComp1982Component;
  let fixture: ComponentFixture<MyComp1982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
