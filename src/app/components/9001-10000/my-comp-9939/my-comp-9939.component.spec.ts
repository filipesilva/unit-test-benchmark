import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9939Component } from './my-comp-9939.component';

describe('MyComp9939Component', () => {
  let component: MyComp9939Component;
  let fixture: ComponentFixture<MyComp9939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
