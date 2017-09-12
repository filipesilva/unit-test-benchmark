import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7297Component } from './my-comp-7297.component';

describe('MyComp7297Component', () => {
  let component: MyComp7297Component;
  let fixture: ComponentFixture<MyComp7297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
