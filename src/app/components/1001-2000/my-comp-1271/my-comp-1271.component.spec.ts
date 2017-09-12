import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1271Component } from './my-comp-1271.component';

describe('MyComp1271Component', () => {
  let component: MyComp1271Component;
  let fixture: ComponentFixture<MyComp1271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
