import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp110Component } from './my-comp-110.component';

describe('MyComp110Component', () => {
  let component: MyComp110Component;
  let fixture: ComponentFixture<MyComp110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
