import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp615Component } from './my-comp-615.component';

describe('MyComp615Component', () => {
  let component: MyComp615Component;
  let fixture: ComponentFixture<MyComp615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
