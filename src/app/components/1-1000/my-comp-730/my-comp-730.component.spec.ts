import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp730Component } from './my-comp-730.component';

describe('MyComp730Component', () => {
  let component: MyComp730Component;
  let fixture: ComponentFixture<MyComp730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
