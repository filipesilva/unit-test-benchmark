import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5333Component } from './my-comp-5333.component';

describe('MyComp5333Component', () => {
  let component: MyComp5333Component;
  let fixture: ComponentFixture<MyComp5333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
