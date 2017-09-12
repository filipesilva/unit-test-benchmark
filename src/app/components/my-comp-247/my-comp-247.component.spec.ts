import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp247Component } from './my-comp-247.component';

describe('MyComp247Component', () => {
  let component: MyComp247Component;
  let fixture: ComponentFixture<MyComp247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
