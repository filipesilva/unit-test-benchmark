import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2294Component } from './my-comp-2294.component';

describe('MyComp2294Component', () => {
  let component: MyComp2294Component;
  let fixture: ComponentFixture<MyComp2294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
