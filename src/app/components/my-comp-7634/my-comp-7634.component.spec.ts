import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7634Component } from './my-comp-7634.component';

describe('MyComp7634Component', () => {
  let component: MyComp7634Component;
  let fixture: ComponentFixture<MyComp7634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
