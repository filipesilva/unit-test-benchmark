import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5038Component } from './my-comp-5038.component';

describe('MyComp5038Component', () => {
  let component: MyComp5038Component;
  let fixture: ComponentFixture<MyComp5038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
