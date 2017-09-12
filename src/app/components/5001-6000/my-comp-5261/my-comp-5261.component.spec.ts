import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5261Component } from './my-comp-5261.component';

describe('MyComp5261Component', () => {
  let component: MyComp5261Component;
  let fixture: ComponentFixture<MyComp5261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
