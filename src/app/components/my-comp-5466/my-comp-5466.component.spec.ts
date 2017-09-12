import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5466Component } from './my-comp-5466.component';

describe('MyComp5466Component', () => {
  let component: MyComp5466Component;
  let fixture: ComponentFixture<MyComp5466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
