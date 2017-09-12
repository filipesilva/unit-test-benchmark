import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7845Component } from './my-comp-7845.component';

describe('MyComp7845Component', () => {
  let component: MyComp7845Component;
  let fixture: ComponentFixture<MyComp7845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
