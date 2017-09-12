import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7450Component } from './my-comp-7450.component';

describe('MyComp7450Component', () => {
  let component: MyComp7450Component;
  let fixture: ComponentFixture<MyComp7450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
