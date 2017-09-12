import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5460Component } from './my-comp-5460.component';

describe('MyComp5460Component', () => {
  let component: MyComp5460Component;
  let fixture: ComponentFixture<MyComp5460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
