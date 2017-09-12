import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp388Component } from './my-comp-388.component';

describe('MyComp388Component', () => {
  let component: MyComp388Component;
  let fixture: ComponentFixture<MyComp388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
