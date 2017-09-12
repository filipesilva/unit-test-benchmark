import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1118Component } from './my-comp-1118.component';

describe('MyComp1118Component', () => {
  let component: MyComp1118Component;
  let fixture: ComponentFixture<MyComp1118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
