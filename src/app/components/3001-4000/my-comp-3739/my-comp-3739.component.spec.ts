import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3739Component } from './my-comp-3739.component';

describe('MyComp3739Component', () => {
  let component: MyComp3739Component;
  let fixture: ComponentFixture<MyComp3739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
