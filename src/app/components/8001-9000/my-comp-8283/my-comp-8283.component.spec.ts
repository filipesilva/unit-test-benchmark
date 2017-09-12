import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8283Component } from './my-comp-8283.component';

describe('MyComp8283Component', () => {
  let component: MyComp8283Component;
  let fixture: ComponentFixture<MyComp8283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
