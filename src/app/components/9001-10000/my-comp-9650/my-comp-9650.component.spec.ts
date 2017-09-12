import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9650Component } from './my-comp-9650.component';

describe('MyComp9650Component', () => {
  let component: MyComp9650Component;
  let fixture: ComponentFixture<MyComp9650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
