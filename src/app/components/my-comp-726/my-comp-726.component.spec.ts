import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp726Component } from './my-comp-726.component';

describe('MyComp726Component', () => {
  let component: MyComp726Component;
  let fixture: ComponentFixture<MyComp726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
