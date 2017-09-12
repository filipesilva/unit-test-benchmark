import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp407Component } from './my-comp-407.component';

describe('MyComp407Component', () => {
  let component: MyComp407Component;
  let fixture: ComponentFixture<MyComp407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
