import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2720Component } from './my-comp-2720.component';

describe('MyComp2720Component', () => {
  let component: MyComp2720Component;
  let fixture: ComponentFixture<MyComp2720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
