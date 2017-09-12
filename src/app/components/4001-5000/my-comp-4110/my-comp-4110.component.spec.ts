import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4110Component } from './my-comp-4110.component';

describe('MyComp4110Component', () => {
  let component: MyComp4110Component;
  let fixture: ComponentFixture<MyComp4110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
