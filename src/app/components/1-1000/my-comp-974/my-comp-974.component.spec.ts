import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp974Component } from './my-comp-974.component';

describe('MyComp974Component', () => {
  let component: MyComp974Component;
  let fixture: ComponentFixture<MyComp974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
