import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5767Component } from './my-comp-5767.component';

describe('MyComp5767Component', () => {
  let component: MyComp5767Component;
  let fixture: ComponentFixture<MyComp5767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
