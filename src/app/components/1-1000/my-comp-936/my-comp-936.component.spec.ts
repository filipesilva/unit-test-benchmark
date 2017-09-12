import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp936Component } from './my-comp-936.component';

describe('MyComp936Component', () => {
  let component: MyComp936Component;
  let fixture: ComponentFixture<MyComp936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
