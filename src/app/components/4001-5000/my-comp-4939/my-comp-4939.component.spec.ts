import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4939Component } from './my-comp-4939.component';

describe('MyComp4939Component', () => {
  let component: MyComp4939Component;
  let fixture: ComponentFixture<MyComp4939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
