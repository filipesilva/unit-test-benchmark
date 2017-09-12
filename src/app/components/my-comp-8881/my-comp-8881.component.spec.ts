import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8881Component } from './my-comp-8881.component';

describe('MyComp8881Component', () => {
  let component: MyComp8881Component;
  let fixture: ComponentFixture<MyComp8881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
