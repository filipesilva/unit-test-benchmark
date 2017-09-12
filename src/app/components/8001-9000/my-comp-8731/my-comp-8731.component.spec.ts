import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8731Component } from './my-comp-8731.component';

describe('MyComp8731Component', () => {
  let component: MyComp8731Component;
  let fixture: ComponentFixture<MyComp8731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
