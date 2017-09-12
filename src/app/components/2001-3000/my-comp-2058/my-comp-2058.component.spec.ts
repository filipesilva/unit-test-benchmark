import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2058Component } from './my-comp-2058.component';

describe('MyComp2058Component', () => {
  let component: MyComp2058Component;
  let fixture: ComponentFixture<MyComp2058Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2058Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
