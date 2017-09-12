import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4026Component } from './my-comp-4026.component';

describe('MyComp4026Component', () => {
  let component: MyComp4026Component;
  let fixture: ComponentFixture<MyComp4026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
