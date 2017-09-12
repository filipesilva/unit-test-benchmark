import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5331Component } from './my-comp-5331.component';

describe('MyComp5331Component', () => {
  let component: MyComp5331Component;
  let fixture: ComponentFixture<MyComp5331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
