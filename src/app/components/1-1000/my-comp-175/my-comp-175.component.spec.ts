import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp175Component } from './my-comp-175.component';

describe('MyComp175Component', () => {
  let component: MyComp175Component;
  let fixture: ComponentFixture<MyComp175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
