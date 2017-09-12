import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6713Component } from './my-comp-6713.component';

describe('MyComp6713Component', () => {
  let component: MyComp6713Component;
  let fixture: ComponentFixture<MyComp6713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
