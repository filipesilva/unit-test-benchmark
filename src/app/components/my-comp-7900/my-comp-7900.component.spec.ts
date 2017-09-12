import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7900Component } from './my-comp-7900.component';

describe('MyComp7900Component', () => {
  let component: MyComp7900Component;
  let fixture: ComponentFixture<MyComp7900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
