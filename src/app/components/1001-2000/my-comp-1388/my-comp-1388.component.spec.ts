import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1388Component } from './my-comp-1388.component';

describe('MyComp1388Component', () => {
  let component: MyComp1388Component;
  let fixture: ComponentFixture<MyComp1388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
