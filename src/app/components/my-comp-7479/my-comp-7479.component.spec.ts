import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7479Component } from './my-comp-7479.component';

describe('MyComp7479Component', () => {
  let component: MyComp7479Component;
  let fixture: ComponentFixture<MyComp7479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
