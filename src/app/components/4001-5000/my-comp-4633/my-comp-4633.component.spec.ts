import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4633Component } from './my-comp-4633.component';

describe('MyComp4633Component', () => {
  let component: MyComp4633Component;
  let fixture: ComponentFixture<MyComp4633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
