import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4329Component } from './my-comp-4329.component';

describe('MyComp4329Component', () => {
  let component: MyComp4329Component;
  let fixture: ComponentFixture<MyComp4329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
