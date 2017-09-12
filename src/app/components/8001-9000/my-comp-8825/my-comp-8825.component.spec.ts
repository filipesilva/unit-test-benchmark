import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8825Component } from './my-comp-8825.component';

describe('MyComp8825Component', () => {
  let component: MyComp8825Component;
  let fixture: ComponentFixture<MyComp8825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
