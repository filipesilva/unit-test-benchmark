import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp664Component } from './my-comp-664.component';

describe('MyComp664Component', () => {
  let component: MyComp664Component;
  let fixture: ComponentFixture<MyComp664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
