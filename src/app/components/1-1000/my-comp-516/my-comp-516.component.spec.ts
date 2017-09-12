import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp516Component } from './my-comp-516.component';

describe('MyComp516Component', () => {
  let component: MyComp516Component;
  let fixture: ComponentFixture<MyComp516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
