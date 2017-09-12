import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp136Component } from './my-comp-136.component';

describe('MyComp136Component', () => {
  let component: MyComp136Component;
  let fixture: ComponentFixture<MyComp136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
