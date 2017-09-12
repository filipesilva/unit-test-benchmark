import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7321Component } from './my-comp-7321.component';

describe('MyComp7321Component', () => {
  let component: MyComp7321Component;
  let fixture: ComponentFixture<MyComp7321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
