import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp445Component } from './my-comp-445.component';

describe('MyComp445Component', () => {
  let component: MyComp445Component;
  let fixture: ComponentFixture<MyComp445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
