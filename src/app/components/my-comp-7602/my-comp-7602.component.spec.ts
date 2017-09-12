import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7602Component } from './my-comp-7602.component';

describe('MyComp7602Component', () => {
  let component: MyComp7602Component;
  let fixture: ComponentFixture<MyComp7602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
