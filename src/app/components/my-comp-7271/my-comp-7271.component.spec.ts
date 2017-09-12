import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7271Component } from './my-comp-7271.component';

describe('MyComp7271Component', () => {
  let component: MyComp7271Component;
  let fixture: ComponentFixture<MyComp7271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
