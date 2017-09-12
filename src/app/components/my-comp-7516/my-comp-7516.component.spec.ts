import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7516Component } from './my-comp-7516.component';

describe('MyComp7516Component', () => {
  let component: MyComp7516Component;
  let fixture: ComponentFixture<MyComp7516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
