import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7234Component } from './my-comp-7234.component';

describe('MyComp7234Component', () => {
  let component: MyComp7234Component;
  let fixture: ComponentFixture<MyComp7234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
