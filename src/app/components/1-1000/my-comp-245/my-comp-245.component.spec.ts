import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp245Component } from './my-comp-245.component';

describe('MyComp245Component', () => {
  let component: MyComp245Component;
  let fixture: ComponentFixture<MyComp245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
