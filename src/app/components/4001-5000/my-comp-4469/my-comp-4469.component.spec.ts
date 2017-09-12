import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4469Component } from './my-comp-4469.component';

describe('MyComp4469Component', () => {
  let component: MyComp4469Component;
  let fixture: ComponentFixture<MyComp4469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
