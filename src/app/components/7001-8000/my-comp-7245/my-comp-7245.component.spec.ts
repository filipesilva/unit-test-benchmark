import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7245Component } from './my-comp-7245.component';

describe('MyComp7245Component', () => {
  let component: MyComp7245Component;
  let fixture: ComponentFixture<MyComp7245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
