import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9602Component } from './my-comp-9602.component';

describe('MyComp9602Component', () => {
  let component: MyComp9602Component;
  let fixture: ComponentFixture<MyComp9602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
