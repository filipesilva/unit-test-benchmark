import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5388Component } from './my-comp-5388.component';

describe('MyComp5388Component', () => {
  let component: MyComp5388Component;
  let fixture: ComponentFixture<MyComp5388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
