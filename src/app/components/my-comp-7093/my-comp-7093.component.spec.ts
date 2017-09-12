import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7093Component } from './my-comp-7093.component';

describe('MyComp7093Component', () => {
  let component: MyComp7093Component;
  let fixture: ComponentFixture<MyComp7093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
