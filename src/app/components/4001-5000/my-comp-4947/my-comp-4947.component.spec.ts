import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4947Component } from './my-comp-4947.component';

describe('MyComp4947Component', () => {
  let component: MyComp4947Component;
  let fixture: ComponentFixture<MyComp4947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
