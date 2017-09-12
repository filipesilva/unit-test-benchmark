import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp553Component } from './my-comp-553.component';

describe('MyComp553Component', () => {
  let component: MyComp553Component;
  let fixture: ComponentFixture<MyComp553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
