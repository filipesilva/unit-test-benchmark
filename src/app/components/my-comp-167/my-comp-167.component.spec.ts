import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp167Component } from './my-comp-167.component';

describe('MyComp167Component', () => {
  let component: MyComp167Component;
  let fixture: ComponentFixture<MyComp167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
