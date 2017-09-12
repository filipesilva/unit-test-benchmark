import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5827Component } from './my-comp-5827.component';

describe('MyComp5827Component', () => {
  let component: MyComp5827Component;
  let fixture: ComponentFixture<MyComp5827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
