import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp740Component } from './my-comp-740.component';

describe('MyComp740Component', () => {
  let component: MyComp740Component;
  let fixture: ComponentFixture<MyComp740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
