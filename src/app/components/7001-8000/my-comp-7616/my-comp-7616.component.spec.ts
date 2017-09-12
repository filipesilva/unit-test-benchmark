import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7616Component } from './my-comp-7616.component';

describe('MyComp7616Component', () => {
  let component: MyComp7616Component;
  let fixture: ComponentFixture<MyComp7616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
