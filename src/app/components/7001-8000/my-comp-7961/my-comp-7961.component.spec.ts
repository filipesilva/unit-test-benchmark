import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7961Component } from './my-comp-7961.component';

describe('MyComp7961Component', () => {
  let component: MyComp7961Component;
  let fixture: ComponentFixture<MyComp7961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
