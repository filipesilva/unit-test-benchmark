import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4713Component } from './my-comp-4713.component';

describe('MyComp4713Component', () => {
  let component: MyComp4713Component;
  let fixture: ComponentFixture<MyComp4713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
