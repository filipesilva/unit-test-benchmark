import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7482Component } from './my-comp-7482.component';

describe('MyComp7482Component', () => {
  let component: MyComp7482Component;
  let fixture: ComponentFixture<MyComp7482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
