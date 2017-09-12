import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2516Component } from './my-comp-2516.component';

describe('MyComp2516Component', () => {
  let component: MyComp2516Component;
  let fixture: ComponentFixture<MyComp2516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
