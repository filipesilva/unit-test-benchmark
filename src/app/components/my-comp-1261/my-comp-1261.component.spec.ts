import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1261Component } from './my-comp-1261.component';

describe('MyComp1261Component', () => {
  let component: MyComp1261Component;
  let fixture: ComponentFixture<MyComp1261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
