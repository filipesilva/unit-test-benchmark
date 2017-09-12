import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8266Component } from './my-comp-8266.component';

describe('MyComp8266Component', () => {
  let component: MyComp8266Component;
  let fixture: ComponentFixture<MyComp8266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
