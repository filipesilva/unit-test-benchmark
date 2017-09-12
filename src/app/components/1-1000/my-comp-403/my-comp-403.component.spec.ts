import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp403Component } from './my-comp-403.component';

describe('MyComp403Component', () => {
  let component: MyComp403Component;
  let fixture: ComponentFixture<MyComp403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
