import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7389Component } from './my-comp-7389.component';

describe('MyComp7389Component', () => {
  let component: MyComp7389Component;
  let fixture: ComponentFixture<MyComp7389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
