import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5918Component } from './my-comp-5918.component';

describe('MyComp5918Component', () => {
  let component: MyComp5918Component;
  let fixture: ComponentFixture<MyComp5918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
