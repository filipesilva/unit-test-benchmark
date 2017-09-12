import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9495Component } from './my-comp-9495.component';

describe('MyComp9495Component', () => {
  let component: MyComp9495Component;
  let fixture: ComponentFixture<MyComp9495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
