import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp788Component } from './my-comp-788.component';

describe('MyComp788Component', () => {
  let component: MyComp788Component;
  let fixture: ComponentFixture<MyComp788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
