import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp466Component } from './my-comp-466.component';

describe('MyComp466Component', () => {
  let component: MyComp466Component;
  let fixture: ComponentFixture<MyComp466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
