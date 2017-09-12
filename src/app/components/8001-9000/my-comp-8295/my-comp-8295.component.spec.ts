import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8295Component } from './my-comp-8295.component';

describe('MyComp8295Component', () => {
  let component: MyComp8295Component;
  let fixture: ComponentFixture<MyComp8295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
