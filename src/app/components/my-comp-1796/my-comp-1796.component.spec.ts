import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1796Component } from './my-comp-1796.component';

describe('MyComp1796Component', () => {
  let component: MyComp1796Component;
  let fixture: ComponentFixture<MyComp1796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
