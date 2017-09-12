import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp727Component } from './my-comp-727.component';

describe('MyComp727Component', () => {
  let component: MyComp727Component;
  let fixture: ComponentFixture<MyComp727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
