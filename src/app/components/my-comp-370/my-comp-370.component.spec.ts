import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp370Component } from './my-comp-370.component';

describe('MyComp370Component', () => {
  let component: MyComp370Component;
  let fixture: ComponentFixture<MyComp370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
