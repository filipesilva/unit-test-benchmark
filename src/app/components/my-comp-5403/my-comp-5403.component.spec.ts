import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5403Component } from './my-comp-5403.component';

describe('MyComp5403Component', () => {
  let component: MyComp5403Component;
  let fixture: ComponentFixture<MyComp5403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
