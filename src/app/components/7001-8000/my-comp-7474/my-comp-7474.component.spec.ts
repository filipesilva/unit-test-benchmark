import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7474Component } from './my-comp-7474.component';

describe('MyComp7474Component', () => {
  let component: MyComp7474Component;
  let fixture: ComponentFixture<MyComp7474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
