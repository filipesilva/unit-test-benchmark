import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp218Component } from './my-comp-218.component';

describe('MyComp218Component', () => {
  let component: MyComp218Component;
  let fixture: ComponentFixture<MyComp218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
