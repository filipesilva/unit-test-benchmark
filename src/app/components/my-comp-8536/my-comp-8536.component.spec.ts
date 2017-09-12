import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8536Component } from './my-comp-8536.component';

describe('MyComp8536Component', () => {
  let component: MyComp8536Component;
  let fixture: ComponentFixture<MyComp8536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
