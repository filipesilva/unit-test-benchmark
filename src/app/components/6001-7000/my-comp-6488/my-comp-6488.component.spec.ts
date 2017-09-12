import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6488Component } from './my-comp-6488.component';

describe('MyComp6488Component', () => {
  let component: MyComp6488Component;
  let fixture: ComponentFixture<MyComp6488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
