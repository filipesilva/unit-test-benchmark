import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7444Component } from './my-comp-7444.component';

describe('MyComp7444Component', () => {
  let component: MyComp7444Component;
  let fixture: ComponentFixture<MyComp7444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
