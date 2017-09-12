import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp783Component } from './my-comp-783.component';

describe('MyComp783Component', () => {
  let component: MyComp783Component;
  let fixture: ComponentFixture<MyComp783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
